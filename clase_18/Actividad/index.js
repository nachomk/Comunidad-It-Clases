const listaTareas = require('./tareas')
listaTareas.mostrarTareas()
listaTareas.agregarTareas({ description: 'ir al super', done: true })
listaTareas.mostrarTareas()
listaTareas.vaciarListas()
listaTareas.mostrarTareas()