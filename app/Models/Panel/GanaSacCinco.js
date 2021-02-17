'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GanaSacCinco extends Model {
    static get table() { return 'ganasacecincunos' }
}

module.exports = GanaSacCinco