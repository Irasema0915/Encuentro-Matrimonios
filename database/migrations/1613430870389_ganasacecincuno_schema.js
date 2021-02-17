'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GanasacecincunoSchema extends Schema {
    up() {
        this.create('ganasacecincunos', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('ganasacecincunos')
    }
}

module.exports = GanasacecincunoSchema