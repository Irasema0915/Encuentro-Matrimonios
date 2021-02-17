'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FinaMatriCinco extends Model {
    static get table() { return 'finamatricincunos' }

}

module.exports = FinaMatriCinco