'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GanaSacSiete extends Model {
    static get table() { return 'ganasacesetes' }
}

module.exports = GanaSacSiete