'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GanaMatSiete extends Model {
    static get table() { return 'ganamatrisetes' }

}

module.exports = GanaMatSiete