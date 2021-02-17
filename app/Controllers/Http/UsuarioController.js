'use strict'
const User = use('App/Models/User');
const Database = use('Database')

class UsuarioController {

    async registro({ request, response }) {
        const { email, password, pista, persona, region, ciudad, area } = request.only(['email', 'password', 'pista', 'persona', 'region', 'ciudad', 'area'])

        await User.create({
            email,
            password,
            pista,
            persona,
            region,
            ciudad,
            area
        })
        return response.send({ message: 'Has sido registrado, Suerte en las votaciones...' })
    }
    async login({ request, response, auth }) {

        const { email, password } = request.only(['email', 'password'])

        const token = await auth.attempt(email, password)
        return response.json(token)

    }
    async logout({ response, auth }) {
        let email = auth.email
        await auth
            .authenticator('api')
            .revokeTokensForUser(email)
        return response.status(204).send(null)
    }

    async mostrar({ params, response })

    {
        const data = await User.all()

        return response.status(200).json(data)


    }
    async consulta({ response }) {
        const email = "angelaruiz.0915@gmail.com"
        const sql = await Database.select('users.pista as pista').from('users').where('email', email)

        return response.json(sql[0]['pista'])
    }
    async recuperarcontra({ response, request }) {

        const { email } = request.all()

        const sql = await Database.select('users.pista as pista').from('users').where('email', email)

        const mailjet = require('node-mailjet')
            .connect('7e29f725a8a82c0a8d146cf5126a41d9', '6f669258d9531d1965ba0cb913a78326')
        const peticion = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [{
                    "From": {
                        "Email": "rjdeveloment@gmail.com",
                        "Name": "RJ"
                    },
                    "To": [{
                        "Email": email,
                        "Name": "Soporte de Encuentro Matrimonial"
                    }],
                    "Subject": "Recuperar contraseña",
                    "TextPart": "My first Mailjet email",
                    "HTMLPart": "<h2> ¡Bievenido al sistema de Encuentro Matrimonial!</h2><h4> ~ Ya tendras tu contraseña, ten pasciencia... ~ </h4><br /> <strong>Tu contraseña es:  " + " " + sql[0]['pista'] + " </strong>",
                    "CustomID": "AppGettingStartedTest"
                }]
            })
        peticion
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })
        return response.json({ message: "Se ha enviado tu contraseña" })
    }

    async deleteUser({ response, params }) {
        const id = params.id
        const user = await User.findOrFail(id)

        if (user.delete())
            return response.json({ message: "El usuario ha sido eliminado" })
        return response.json(null, 422)

    }

}

module.exports = UsuarioController