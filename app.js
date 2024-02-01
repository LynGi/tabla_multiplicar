
// const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config.yargs/yargs' );

const colors = require('colors');


console.clear();


// USO TRADICIONAL PARA COMENTARIOS DE LA CONSOLA, NO RECOMENDADO
// const [ , , arg3 = 'base=4' ] = process.argv;
// const [ , base = 4] = arg3.split('=');


// const base = 4;


crearArchivo( argv.b, argv.l, argv.h )
    .then ( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));

