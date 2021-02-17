'use strict'
const Database = use('Database');
const Panel = use('App/Models/Panel/PanelMatrimonio');
const Panel1 = use('App/Models/Panel/PanelSacerdote');
const Panel2 = use('App/Models/Panel/FinaMatriSete');
const Panel3 = use('App/Models/Panel/FinaSacerSiete');
const Panel4 = use('App/Models/Panel/FinaMatriCinco');
const Panel5 = use('App/Models/Panel/FinaSacerCinco');
const Panel6 = use('App/Models/Panel/GanaMatSiete');
const Panel7 = use('App/Models/Panel/GanaSacSiete');
const Panel8 = use('App/Models/Panel/GanaMatCinco');
const Panel9 = use('App/Models/Panel/GanaSacCinco');
const Panel10 = use('App/Models/Panel/UsersPAnel');



class PanelController {

    //Activar y desactivar MAtrimonios "matrimoniopanels"

    async activarMatri({ response }) {
        const affectedRows = await Database
            .table('matrimoniopanels')
            .where({ modulo: 'Matrimonio' })
            .update('estado', 'activar')
        return response.status(200).json('ACTIVADO')
    }

    async mostrarT({ response }) {
        const data = await Panel.all()

        return response.status(200).json(data)

    }

    async desactivarMatri({ response }) {
        const affectedRows = await Database
            .table('matrimoniopanels')
            .where({ modulo: 'Matrimonio' })
            .update('estado', 'desactivado')
        return response.status(200).json('DESACTIVADO')
    }

    //Activar y desactivar Sacerdotes "sacerdotepanels"

    async activarSacer({ response }) {
        const affectedRows = await Database
            .table('sacerdotepanels')
            .where({ modulo: 'Sacerdotes' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarS({ response }) {
        const data = await Panel1.all()

        return response.status(200).json(data)

    }

    async desactivarSacer({ response }) {
        const affectedRows = await Database
            .table('sacerdotepanels')
            .where({ modulo: 'Sacerdotes' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }

    //Activar y desactivar Finalistas Mattrimonios al 70 "finamatrisetes"

    async activarFM({ response }) {
        const affectedRows = await Database
            .table('finamatrisetes')
            .where({ modulo: 'Matrimonios Finalistas al 70' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarFM({ response }) {
        const data = await Panel2.all()

        return response.status(200).json(data)

    }

    async desactivarFM({ response }) {
        const affectedRows = await Database
            .table('finamatrisetes')
            .where({ modulo: 'Matrimonios Finalistas al 70' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }

    //Activar y desactivar Finalistas Sacerdotes al 70 "finasacersetes"

    async activarFS({ response }) {
        const affectedRows = await Database
            .table('finasacersetes')
            .where({ modulo: 'Sacerdotes Finalistas al 70' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarFS({ response }) {
        const data = await Panel3.all()

        return response.status(200).json(data)

    }

    async desactivarFS({ response }) {
        const affectedRows = await Database
            .table('finasacersetes')
            .where({ modulo: 'Sacerdotes Finalistas al 70' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }

    //Activar y desactivar Finalistas Mattrimonios al 50 "finamatricincunos"

    async activarFM5({ response }) {
        const affectedRows = await Database
            .table('finamatricincunos')
            .where({ modulo: 'Matrimonios Finalistas al 50+1' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarFM5({ response }) {
        const data = await Panel4.all()

        return response.status(200).json(data)

    }

    async desactivarFM5({ response }) {
        const affectedRows = await Database
            .table('finamatricincunos')
            .where({ modulo: 'Matrimonios Finalistas al 50+1' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }

    //Activar y desactivar Finalistas Sacerdotes al 50 "finasacecincunos"

    async activarFS5({ response }) {
        const affectedRows = await Database
            .table('finasacecincunos')
            .where({ modulo: 'Sacerdotes Finalistas al 50+1' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarFS5({ response }) {
        const data = await Panel5.all()

        return response.status(200).json(data)

    }

    async desactivarFS5({ response }) {
        const affectedRows = await Database
            .table('finasacecincunos')
            .where({ modulo: 'Sacerdotes Finalistas al 50+1' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }



    //Activar y desactivar Ganadores Matrimonios al 70 "ganamatrisetes"

    async activarGM7({ response }) {
        const affectedRows = await Database
            .table('ganamatrisetes')
            .where({ modulo: 'Ganadores Matrimonios al 70' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarGM7({ response }) {
        const data = await Panel6.all()

        return response.status(200).json(data)

    }

    async desactivarGM7({ response }) {
        const affectedRows = await Database
            .table('ganamatrisetes')
            .where({ modulo: 'Ganadores Matrimonios al 70' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }

    //Activar y desactivar Ganadores Sacerdotes al 70 "ganasacesetes"

    async activarGS7({ response }) {
        const affectedRows = await Database
            .table('ganasacesetes')
            .where({ modulo: 'Ganadores Sacerdotes al 70' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarGS7({ response }) {
        const data = await Panel7.all()

        return response.status(200).json(data)

    }

    async desactivarGS7({ response }) {
        const affectedRows = await Database
            .table('ganasacesetes')
            .where({ modulo: 'Ganadores Sacerdotes al 70' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }

    //Activar y desactivar Ganadores Matrimonios al 50+1 "ganamatricincunos"

    async activarGM5({ response }) {
        const affectedRows = await Database
            .table('ganamatricincunos')
            .where({ modulo: 'Ganadores Matrimonio al 50+1' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarGM5({ response }) {
        const data = await Panel8.all()

        return response.status(200).json(data)

    }

    async desactivarGM5({ response }) {
        const affectedRows = await Database
            .table('ganamatricincunos')
            .where({ modulo: 'Ganadores Matrimonio al 50+1' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }


    //Activar y desactivar Ganadores Sacerdotes al 50+1 "ganasacecincunos"

    async activarGS5({ response }) {
        const affectedRows = await Database
            .table('ganasacecincunos')
            .where({ modulo: 'Ganadores Sacerdotes al 50+1' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarGS5({ response }) {
        const data = await Panel9.all()

        return response.status(200).json(data)

    }

    async desactivarGS5({ response }) {
        const affectedRows = await Database
            .table('ganasacecincunos')
            .where({ modulo: 'Ganadores Sacerdotes al 50+1' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }

    //Activar y desactivar Usuarios Panel "usuariospanels"

    async activarUser({ response }) {
        const affectedRows = await Database
            .table('usuariospanels')
            .where({ modulo: 'Usuarios' })
            .update('estado', 'activar')
        return response.json('ACTIVADO')
    }

    async mostrarUser({ response }) {
        const data = await Panel10.all()

        return response.status(200).json(data)

    }

    async desactivarUser({ response }) {
        const affectedRows = await Database
            .table('usuariospanels')
            .where({ modulo: 'Usuarios' })
            .update('estado', 'desactivado')
        return response.json('DESACTIVADO')
    }



}

module.exports = PanelController