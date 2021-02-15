'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PanelSchema extends Schema {
    up() {
        this.create('panels', (table) => {
            table.increments('id')
            table.string('modulo')
            table.string('estado')

            table.timestamps()
        })
    }

    down() {
        this.drop('panels')
    }
}

module.exports = PanelSchema