'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RondasSchema extends Schema {
    up() {
        this.create('rondas', (table) => {
            table.increments('id')
            table.integer('no-ronda').notNullable()
            table.datetime('fecha-hr').notNullable()
            table.integer('id_nominados').unsigned().references('id').inTable('nominados')
            table.string('estado').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('rondas')
    }
}

module.exports = RondasSchema