'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatrimoniopanelSchema extends Schema {
    up() {
        this.create('matrimoniopanels', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('matrimoniopanels')
    }
}

module.exports = MatrimoniopanelSchema