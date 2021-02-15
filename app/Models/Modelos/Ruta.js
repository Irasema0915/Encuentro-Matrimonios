'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ruta extends Model {
    static get table() { return 'rondas' }
}

module.exports = Ruta