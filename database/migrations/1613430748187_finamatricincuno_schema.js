'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinamatricincunoSchema extends Schema {
    up() {
        this.create('finamatricincunos', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('finamatricincunos')
    }
}

module.exports = FinamatricincunoSchema