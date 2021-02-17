'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PanelSacerdote extends Model {
    static get table() { return 'sacerdotepanels' }

}

module.exports = PanelSacerdote