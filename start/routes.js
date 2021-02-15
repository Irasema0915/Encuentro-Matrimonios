'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.group(() => {
    Route.post('/registrar', 'UsuarioController.registro')
    Route.post('/login', 'UsuarioController.login')
    Route.get('/mostrar/:id', 'UsuarioController.mostrar')
    Route.post('/logout', 'UsuarioController.logout')
    Route.post('/recuperarcontrasena', 'UsuarioController.recuperarcontra')
}).prefix('api/usuarios')

Route.group(() => {
    Route.post('/registrar', 'NominadoController.registro')
    Route.get('/mostrar/:id', 'NominadoController.mostrar')

    Route.post('/totalVotosMatrimonios', 'NominadoController.totalVotosMatrimonios')
    Route.get('/totalVotosSacerdotes', 'NominadoController.totalVotosSacerdotes')

    Route.get('/finalistasMatrimonio', 'NominadoController.finalistasMatrimonio')
    Route.get('/finalistasSacerdote', 'NominadoController.finalistasSacerdote')

    Route.get('/sumaVotos', 'NominadoController.sumaVotos')

    Route.get('/sevenMatrimonio', 'NominadoController.seventyPorcientoMatrimonio')
    Route.get('/fiftyMatrimonio', 'NominadoController.fiftyPorciento')

    Route.get('/sevenSacerdote', 'NominadoController.seventyPorcientoSacerdote')
    Route.get('/fiftySacerdote', 'NominadoController.fiftyPadre')

}).prefix('api/nominados')