/* A partir de los datos facilitados en el
archivo bicing.json
Función que nos devuelva la estación con
más bicicletas libres. (sort con función
compare personalizada, de más a menos
bicis libres, tomar primer elemento)
Función que nos devuelva un array de
nombres de estaciones que no tienen
bicicletas libres (filter+map).

Función que devuelva las X estaciones más
cercanas a la ubicación 41.384237,
2.138484
Cálculo de distancia entre (x,y) y (x',y'):
● Raíz cuadrada de la suma de los
cuadrados de (y-y') y (x-x').
Utilizar sort basado en esta distancia.
*/
const bicing = require ('./bicing.json');
function ordenarLliures(a,b){
    if (a.free_bikes>b.free_bikes) {return -1;}
    else if (a.free_bikes<b.free_bikes){return 1;}
    else return 0;
}
let bicisFree = [...bicing];
function bicisLliures(){
    bicisFree.sort(ordenarLliures);
    return bicisFree[0];
}

console.log(bicisLliures());


// Llista de marques de motos
function lliures(){
    let bicisLliures =bicing.map(bici => bici.free_bikes);
    return bicisLliures = bicing.filter(bici => bici.free_bikes===0);
}
/*
let lliureslength = lliures();
console.log(lliureslength.length);
*/
//console.log(lliures());

function estacionsProperes(estacions){
    let latitudA = 41.384237;
    let longitudA = 2.138484;

    bicing.forEach(estacio => {
        const latDifference = latitudA - estacio.latitude;
        const lonDifference = longitudA - estacio.longitude;
        estacio.distance = Math.sqrt(latDifference * latDifference + lonDifference * lonDifference);
    });
    bicing.sort((a, b) => a.distance - b.distance);

    for (let i = 0; i < estacions; i++) {
        const estacio = bicing[i];
        console.log(`${estacio.name}: ${estacio.distance}`);
    }
}
console.log(estacionsProperes(5));