'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinamatriseteSchema extends Schema {
    up() {
        this.create('finamatrisetes', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('finamatrisetes')
    }
}

module.exports = FinamatriseteSchema