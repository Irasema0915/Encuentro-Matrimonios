'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GanamatricincunoSchema extends Schema {
    up() {
        this.create('ganamatricincunos', (table) => {
            table.increments('id')
            table.string('modulo', 60).notNullable()
            table.string('estado', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('ganamatricincunos')
    }
}

module.exports = GanamatricincunoSchema