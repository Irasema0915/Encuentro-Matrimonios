'use strict'
const Database = use('Database');
class RondaController {
    async reloadVT7({ response }) {

        const eliminarfinalistas = await Database.truncate('finalistas')


        const nom = await Database.select('nominados.nombre as Nombre').from('nominados')

        let i = 0
        while (i < nom.length) {




            const affectedRows = await Database
                .table('nominados')
                .where({ nombre: nom[i]['Nombre'] })
                .update('votos', '0')
            i++;

        }
        response.json({ mensaje: 'Se reinicio' })


    }


}

module.exports = RondaController