'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SacerdotepanelSchema extends Schema {
    up() {
        this.create('sacerdotepanels', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('sacerdotepanels')
    }
}

module.exports = SacerdotepanelSchema