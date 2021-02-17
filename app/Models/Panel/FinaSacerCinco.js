'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FinaSacerCinco extends Model {
    static get table() { return 'finasacecincunos' }

}

module.exports = FinaSacerCinco