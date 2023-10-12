console.log("Entro index.js");
console.log (piezas);

const inputBusqueda = document.getElementById ("inputBusqueda");
const resultadoBusqueda = document.getElementById ("resultadoBusqueda");
const imgPieza = document.getElementById ("imgPieza");


function  buscar() {
    console.log ("entro a la opcion de buscar pieza");
    const txtBuscar = inputBuscar.value;
    if (txtBuscar == "") {
        alert ("no haz introducido nada en la busqueda");
    }
    let resultado = piezas.find ((pieza)=>{
        return pieza.nombre.toLocaleLowerCase() == txtBuscar.toLocaleLowerCase();
          //alli arriba ese ToLocalelLowerCase hace la funcion de convertir mayusculas o minunsculas para asi dar el resultado no importa como lo escriban
    });
    if (resultado == undefined) {
        alert ("esa pieza no existe en ajedrez, vulve a escribir una correctamente");
        imgPieza.src = "assets/images/piezas/logo.png";
        resultadoBusqueda.innerHTML = "esa pieza no existe en ajedrez, vulve a escribir una correctamente";
    } else {
        imgPieza.src = resultado.imagen;
        resultadoBusqueda.innerText = resultado.movimiento;
    }
    console.log (resultado, "resultado");
} 


inputBuscar.addEventListener("keypress", (event) => {
    if (event.key === "Enter"){
        buscar();
    }
        //eso del keypress es para dar buscar con un enter en lugar de ir al boton
});