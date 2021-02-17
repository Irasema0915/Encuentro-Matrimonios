'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariospanelSchema extends Schema {
    up() {
        this.create('usuariospanels', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('usuariospanels')
    }
}

module.exports = UsuariospanelSchema