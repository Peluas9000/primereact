
function SumarNumeros(props) {
    const realizarSuma = (num1, num2) => {  
     //   let suma = num1 + num2;
     let suma=props.numero1 +props.numero2;
    console.log("La suma de " + props.num1 + " y " + props.num2 + " es: " + suma);
     console.log(suma);
    }
    return( <div>
           <h1>Sumar numeros {props.numero1} + {props.numero2}</h1>
           <button onClick={() => realizarSuma(5, 10)} className="button">Sumar 5+ 10</button>;
           <button onClick={() => realizarSuma(10, 10)}>Sumar 10+ 10</button>;
           <button onClick={() => realizarSuma(20, 10)}>Sumar 20+ 10</button>;

           
    </div>);

}
export default SumarNumeros;