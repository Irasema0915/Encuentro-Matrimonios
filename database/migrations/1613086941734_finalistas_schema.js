'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinalistasSchema extends Schema {
    up() {
        this.create('finalistas', (table) => {
            table.increments('id')
            table.integer('ronda')
            table.string('nombre').unique()
            table.string('ciudad_origen').notNullable()
            table.string('region').notNullable()
            table.string('tipo').notNullable()
            table.integer('votos').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('finalistas')
    }
}

module.exports = FinalistasSchema