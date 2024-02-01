
const fs = require('fs');


const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida ="";

        for (let x=1; x <= hasta; x++) {
            salida += `${ base } x ${ x } es igual a ${ base * x }\n `;
        }

        if (listar) {
            console.log("======================".green)
            console.log(`  Tabla del ${ base }  `.rainbow)
            console.log("======================".green)
            
            console.log(salida.rainbow);    
        }



        fs.writeFileSync( `./producto/tabla-${ base }.txt`, salida);


        return `tabla-${ base }.txt`;
    } catch(err) {
        throw err;
    }

}

 
module.exports = {
    crearArchivo
}




