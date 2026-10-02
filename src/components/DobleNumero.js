import React from "react";

function DobleNumero() {
    const ejecutarDoble = (numero) => {
      let doble=numero*2;
      console.log("El doble de " + numero + " es: " + doble);
  }
      let mensaje = "Hola, este es un mensaje de ejemplo.";

  const cambiarMensaje = () => {
    console.log("Antes del cambio"+ mensaje);
    mensaje="Hoy es viernes";
    console.log("Despues del cambio"+ mensaje);
  }

  var estilo={
    color:"blue",
    backgroundColor:"yellow",
  }
  var estilo2={
    color:"red",
    backgroundColor:"black",
  }

    return (
    <div>
      <h1>Metodos doble numero </h1>
      <button className="button" onClick={ ()=> cambiarMensaje()}>Modificar mensaje</button>
      <button className="button" onClick={() => ejecutarDoble(5)}>Doble de 5</button>
      <button className="button" onClick={() => ejecutarDoble(10)}>Doble de 10</button>
    </div>
  );
}
export default DobleNumero;