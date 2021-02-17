'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Finalista extends Model {
    static get table() { return 'finalistas' }
}

module.exports = Finalista