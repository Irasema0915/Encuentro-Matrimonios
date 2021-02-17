'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FinaSacerSiete extends Model {
    static get table() { return 'finasacersetes' }
}

module.exports = FinaSacerSiete