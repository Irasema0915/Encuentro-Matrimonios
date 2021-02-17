'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GanasaceseteSchema extends Schema {
    up() {
        this.create('ganasacesetes', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('ganasacesetes')
    }
}

module.exports = GanasaceseteSchema