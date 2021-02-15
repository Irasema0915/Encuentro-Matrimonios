'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NominadosSchema extends Schema {
    up() {
        this.create('nominados', (table) => {
            table.increments('id')
            table.string('estado').notNullable()
            table.string('nombre').notNullable()
            table.string('ciudad_origen').notNullable()
            table.string('region').notNullable()
            table.string('tipo').notNullable()
            table.integer('votos').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('nominados')
    }
}

module.exports = NominadosSchema