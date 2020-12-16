//Funciones que son invocadas inmediatamente

//FUNCIONES LITERALES
function invocada() {
    console.log(`me invoco sola`);
}
invocada();

//AUTOINVOCADA
(function autoinvocada(){
    console.log(`me invoco sola`);
})();

//FUNCION SIN NOMBRE/FLECHA
(() => {
console.log(`me invoco sola`)
});

//FUNCION PASANDO PARAMETROS.
((nombre)=>{
    console.log(`me invoco sola ${nombre} `);
})('Astrid');

//FUNCION PASANDO EL NOMBRE COMO PARAMETRO
((nombre = 'Astrid') =>{
    console.log(`me invoco sola ${nombre} `);
})();

