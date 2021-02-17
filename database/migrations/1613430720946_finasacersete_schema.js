'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinasacerseteSchema extends Schema {
    up() {
        this.create('finasacersetes', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('finasacersetes')
    }
}

module.exports = FinasacerseteSchema