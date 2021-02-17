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
    Route.get('/mostrar', 'UsuarioController.mostrar')
    Route.post('/logout', 'UsuarioController.logout')
    Route.post('/recuperarcontrasena', 'UsuarioController.recuperarcontra')
    Route.delete('/deleteUser/:id', 'UsuarioController.deleteUser')
}).prefix('api/usuarios')

Route.group(() => {
    Route.post('/registrar', 'NominadoController.registro')
    Route.get('/mostrar', 'NominadoController.mostrar')
    Route.get('/mostrarP', 'NominadoController.mostrarPadre')
    Route.get('/mostrarFinalistasM', 'NominadoController.mostrarFinalistasM')
    Route.get('/mostrarFinalistasP', 'NominadoController.mostrarFinalistasP')

    Route.get('/totalVotosMatrimonios', 'NominadoController.totalVotosMatrimonios')
    Route.get('/totalVotosSacerdotes', 'NominadoController.totalVotosSacerdotes')

    Route.get('/insertarfinalistasMatrimonio', 'NominadoController.insertarfinalistasMatrimonio')
    Route.get('/finalistasSacerdote', 'NominadoController.finalistasSacerdote')

    Route.delete('/sumaVotos/:id', 'NominadoController.sumaVotos')
    Route.delete('/sumaVotosF/:id', 'NominadoController.sumaVotosF')


    Route.get('/sevenMatrimonio', 'NominadoController.seventyPorcientoMatrimonio')
    Route.get('/fiftyMatrimonio', 'NominadoController.fiftyPorciento')

    Route.get('/sevenSacerdote', 'NominadoController.seventyPorcientoSacerdote')
    Route.get('/fiftySacerdote', 'NominadoController.fiftyPorcientoPadre')

}).prefix('api/nominados')

Route.group(() => {
    Route.get('/activarMatri', 'PanelController.activarMatri')
    Route.get('/desactivarMatri', 'PanelController.desactivarMatri')
    Route.get('/mostrarMAt', 'PanelController.mostrarT')

    //SACERDOTE
    Route.get('/activarSacer', 'PanelController.activarSacer')
    Route.get('/desactivarSacer', 'PanelController.desactivarSacer')
    Route.get('/mostrarSac', 'PanelController.mostrarS')

    //FINALISTAS AL 70
    Route.get('/activarFM', 'PanelController.activarFM')
    Route.get('/desactivarFM', 'PanelController.desactivarFM')
    Route.get('/mostrarFM', 'PanelController.mostrarFM')

    //FINALISTAS AL 70
    Route.get('/activarFS', 'PanelController.activarFS')
    Route.get('/desactivarFS', 'PanelController.desactivarFS')
    Route.get('/mostrarFS', 'PanelController.mostrarFS')

    //FINALISTAS AL 50 MAT
    Route.get('/activarFM5', 'PanelController.activarFM5')
    Route.get('/desactivarFM5', 'PanelController.desactivarFM5')
    Route.get('/mostrarFM5', 'PanelController.mostrarFM5')


    //FINALISTAS AL 50 SAC
    Route.get('/activarFS5', 'PanelController.activarFS5')
    Route.get('/desactivarFS5', 'PanelController.desactivarFS5')
    Route.get('/mostrarFS5', 'PanelController.mostrarFS5')

    //GANADORES AL 70 MAT
    Route.get('/activarGM7', 'PanelController.activarGM7')
    Route.get('/desactivarGM7', 'PanelController.desactivarGM7')
    Route.get('/mostrarGM7', 'PanelController.mostrarGM7')

    //GANADORES AL 70 SAC
    Route.get('/activarGS7', 'PanelController.activarGS7')
    Route.get('/desactivarGS7', 'PanelController.desactivarGS7')
    Route.get('/mostrarGS7', 'PanelController.mostrarGS7')

    //GANADORES AL 50 MAT
    Route.get('/activarGSM5', 'PanelController.activarGM5')
    Route.get('/desactivarGM5', 'PanelController.desactivarGM5')
    Route.get('/mostrarGM5', 'PanelController.mostrarGM5')
        //GANADORES AL 50 SAC
    Route.get('/activarGS5', 'PanelController.activarGS5')
    Route.get('/desactivarGS5', 'PanelController.desactivarGS5')
    Route.get('/mostrarGS5', 'PanelController.mostrarGS5')

    //Usuarios
    Route.get('/activarUser', 'PanelController.activarUser')
    Route.get('/desactivarUser', 'PanelController.desactivarUser')
    Route.get('/mostrarUser', 'PanelController.mostrarUser')

}).prefix('api/panel')

Route.get('/reloadVT7', 'RondaController.reloadVT7')