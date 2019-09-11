/* Multiplicacion del 1-10 con el ciclo FOR */
let fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log(`==========`.green);
    console.log(`Tabla del ${base}`.rainbow);
    console.log(`==========`.green);

    for (let i = 1; i <= limite; i++) {
        let mult = (base * i);
        console.log(`${base} * ${i} = ${mult}`);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            if (!Number(limite)) {
                reject(`Los valores ${ base }, ${ limite } no son números`);
                return;
            }
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            let mult = (base * i);
            data += `${ base } * ${i} = ${mult}\n`;
        }

        /* Guarda la tabla de multiplicar en un documento de texto */

        fs.writeFile(`tablas/tabla-${ base }`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(colors.rainbow(`tabla-${ base }.txt`));
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}