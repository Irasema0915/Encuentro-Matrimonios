'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FinaMatriSete extends Model {
    static get table() { return 'finamatrisetes' }

}

module.exports = FinaMatriSete