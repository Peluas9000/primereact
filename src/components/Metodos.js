function Metodos(){
    const mostrarMensaje=()=>{
        console.log("Hola, este es un mensaje de alerta");
    }
return(<div>
    <h2>Ejemplo de métodos</h2>
        <p>{mostrarMensaje()}</p>
        <p>Este es otro párrafo</p>
    <button onClick={()=>mostrarMensaje()}>Pulsar</button>
</div>)

}
export default Metodos;