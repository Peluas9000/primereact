function SaludoHijo(props){
    //METODO DE PROPS EN EL METODO DEL PADRE 
    let ejecutarMetodoPadre=props.metodoPadre;

    return(<div>
        <h2 style={{color: 'blue'}}>Saludo desde el hijo</h2>
        <button onClick={() => ejecutarMetodoPadre()}>Ejecutar metodo del padre</button>
    </div>)
}

export default SaludoHijo;