const argv = require('yargs')

.command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

/* Recibir parámetros desde consola */

//let argv = process.argv;

let argv2 = process.argv;

console.log(argv.base);
console.log('Límite', argv.limite);

/*
let parametro = argv[2];
let base = parametro.split('=')[1];
*/

/* npm init * crea un archipo package.json
 * npm install recupera las carpetas borradas - node_modele 
 * npm uninstall nodemon desinstala los paquetes*/

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${ archivo }`))
    .catch(err => console.log(err));
*/