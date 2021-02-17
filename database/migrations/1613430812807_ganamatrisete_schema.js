'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GanamatriseteSchema extends Schema {
    up() {
        this.create('ganamatrisetes', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('ganamatrisetes')
    }
}

module.exports = GanamatriseteSchema