'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GanaMatCinco extends Model {
    static get table() { return 'ganamatricincunos' }
}

module.exports = GanaMatCinco