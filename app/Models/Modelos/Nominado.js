'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Nominado extends Model {
    static get table() { return 'nominados' }
}



module.exports = Nominado