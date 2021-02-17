'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsersPAnel extends Model {
    static get table() { return 'usuariospanels' }
}


module.exports = UsersPAnel