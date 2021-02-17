'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinasacecincunoSchema extends Schema {
    up() {
        this.create('finasacecincunos', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('finasacecincunos')
    }
}

module.exports = FinasacecincunoSchema