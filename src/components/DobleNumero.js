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
    return (
    <div>
      <h1>Metodos doble numero </h1>
      <button onClick={ ()=> cambiarMensaje()}>Modificar mensaje</button>
      <button onClick={() => ejecutarDoble(5)}>Doble de 5</button>
      <button onClick={() => ejecutarDoble(10)}>Doble de 10</button>
    </div>
  );
}
export default DobleNumero;