'use strict'
const Nominados = use('App/Models/Modelos/Nominado');
const Finalistas = use('App/Models/Finalista');
const Database = use('Database')

class NominadoController {

    async registro({ response, request }) {
        const { estado, nombre, ciudad_origen, region, tipo, votos } = request.only(['estado', 'nombre', 'ciudad_origen', 'region', 'tipo', 'votos'])
        await Nominados.create({

            estado,
            nombre,
            ciudad_origen,
            region,
            tipo,
            votos

        })
        return response.send({ message: 'Ha sido registrado, Excelente nominado...' })
    }

    // Mostrar los nominados
    async mostrar({ response }) {
        const data = await Database.select('nominados.id as id', 'nominados.nombre as nombres', 'nominados.ciudad_origen as ciudad',
            'nominados.region as region').from('nominados').where({ tipo: 'Matrimonio' })

        return response.status(200).json(data)

    }
    async mostrarPadre({ response }) {
            const data = await Database.select('nominados.id as id', 'nominados.nombre as nombres', 'nominados.ciudad_origen as ciudad',
                'nominados.region as region').from('nominados').where({ tipo: 'Sacerdote' })

            return response.status(200).json(data)

        }
        //Muestra la suma de los votos que son de tipo "MATRIMONIO"
    async totalVotosMatrimonios({ response, }) {
        //const { id, nombre, tipo, votos } = request.all()

        const sql = await Database.from('finalistas').sum('finalistas.votos as Votos')
            .where({ tipo: 'Matrimonio' })

        return response.json(sql)
    }

    //Total de votos de los Sacerdotes
    async totalVotosSacerdotes({ response, }) {
        //const { id, nombre, tipo, votos } = request.all()

        const sql = await Database.from('finalistas').sum('finalistas.votos as Votos')
            .where({ tipo: 'Sacerdote' })

        return response.json(sql)
    }


    //Saca los finalistas de que tienen mas votos 
    async insertarfinalistasMatrimonio({ response }) {
        const max = await Database.table('nominados').where({ tipo: 'Matrimonio' })
            .having('votos', '>=', '3')
        let i = 0
        while (i < max.length) {

            const people = await Database.table('finalistas').insert({
                nombre: max[i]['nombre'],
                ciudad_origen: max[i]['ciudad_origen'],
                region: max[i]['region'],
                tipo: max[i]['tipo']
            })
            i++;

        }


        return response.json({ mensaje: 'sal ya pro' })

    }

    //Finalistas sacerdotes
    async finalistasSacerdote({ response }) {
        const max = await Database.table('nominados').where({ tipo: 'Sacerdote' })
            .having('votos', '>=', '3')
        let i = 0
        while (i < max.length) {

            const people = await Database.table('finalistas').insert({
                nombre: max[i]['nombre'],
                ciudad_origen: max[i]['ciudad_origen'],
                region: max[i]['region'],
                tipo: max[i]['tipo']
            })
            i++;

        }


        return response.json({ mensaje: 'sal ya pro' })

    }


    //Lo usaremos en el stiker de corazones
    async sumaVotos({ params, response }) {
        const nominados = await Nominados.findOrFail(params.id)

        const Total = await Database.table('nominados').where('id', nominados['id']).increment('votos', 1)

        return response.json({ mensaje: 'Ha  sido exitoso tu voto' })
    }

    //Sacar el puntuacion del 70%
    async seventyPorcientoMatrimonio({ response }) {

        //Sacar cuantos usuario tenemos
        const count = await Database
            .from('users')
            .count() // returns array

        const total = count[0]['count(*)']
            //return response.json(total)

        const operacion = (total * .70)
        const max = await Database.table('finalistas')
            .where({ tipo: 'Matrimonio' })
            .having('votos', '>=', operacion)

        if (max.length > 1) {
            return response.json({ mensaje: 'Es un empate, se realizara otra ronda' })
        }
        if (max.length == 1) {
            return response.json(max)
        } else {
            return response.json({ mensaje: 'Votos insuficientes, favor de realizar la otra vez' })
        }

    }

    // Sacar la putuacion de 70% "SACERDOTES"
    async seventyPorcientoSacerdote({ response }) {

        //Sacar cuantos usuario tenemos
        const count = await Database
            .from('users')
            .count() // returns array

        const total = count[0]['count(*)']
            //return response.json(total)

        const operacion = (total * .70)
        const max = await Database.table('finalistas')
            .where({ tipo: 'Sacerdote' })
            .having('votos', '>=', operacion)

        if (max.length > 1) {
            return response.json({ mensaje: 'Es un empate, se realizara otra ronda' })
        }
        if (max.length == 1) {
            return response.json(max)
        } else {
            return response.json({ mensaje: 'Votos insuficientes, favor de realizar la otra vez' })
        }

    }

    // Sacar la puntuacion 50%+1 "Matrimonio"
    async fiftyPorciento({ response }) {

        //Sacar cuantos usuario tenemos
        const count = await Database
            .from('users')
            .count() // returns array

        const total = count[0]['count(*)']
            //return response.json(total)

        const operacion = ((total * .50) + 1)
        const max = await Database.table('finalistas')
            .where({ tipo: 'Matrimonio' })
            .having('votos', '>=', operacion)

        if (max.length > 1) {
            return response.json({ mensaje: 'Es un empate, se realizara otra ronda' })
        }
        if (max.length == 1) {
            return response.json(max)
        } else {
            return response.json({ mensaje: 'Votos insuficientes, favor de realizar la otra vez' })
        }
    }

    // Sacar la puntuacion 50%+1 "Sacerdote"
    async fiftyPorcientoPadre({ response }) {

        //Sacar cuantos usuario tenemos
        const count = await Database
            .from('users')
            .count() // returns array

        const total = count[0]['count(*)']
            //return response.json(total)

        const operacion = ((total * .50) + 1)
        const max = await Database.table('finalistas')
            .where({ tipo: 'Sacerdote' })
            .having('votos', '>=', operacion)

        if (max.length > 1) {
            return response.json({ mensaje: 'Es un empate, se realizara otra ronda' })
        }
        if (max.length == 1) {
            return response.json(max)
        } else {
            return response.json({ mensaje: 'Votos insuficientes, favor de realizar la otra vez' })
        }
    }


    // FINALISTAS //

    async mostrarFinalistasM({ response }) {
        const data = await Database.select('finalistas.id as id', 'finalistas.nombre as nombres', 'finalistas.ciudad_origen as ciudad',
            'finalistas.region as region').from('finalistas').where({ tipo: 'Matrimonio' })

        return response.status(200).json(data)

    }
    async mostrarFinalistasP({ response }) {
        const data = await Database.select('finalistas.id as id', 'finalistas.nombre as nombres', 'finalistas.ciudad_origen as ciudad',
            'finalistas.region as region').from('finalistas').where({ tipo: 'Sacerdote' })

        return response.status(200).json(data)

    }

    async sumaVotosF({ params, response }) {
        const fin = await Finalistas.findOrFail(params.id)

        const Total = await Database.table('finalistas').where('id', fin['id']).increment('votos', 1)

        return response.json({ mensaje: 'Ha  sido exitoso tu voto' })
    }







}

module.exports = NominadoController