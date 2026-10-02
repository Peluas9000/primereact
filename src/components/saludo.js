function Saludo(props){
var mensaje="HOy es viernes";
let nombre=props.nombre;



    return (<h1>Hola, mundo, es jueves</h1>,
        <h2>"Hola me llamo, {props.nombre} y tengo {props.edad} años"</h2>

    );
    
}
export default Saludo;