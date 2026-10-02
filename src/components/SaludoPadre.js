import SaludoHijo from "./SaludoHijo";



function SaludoPadre(){
    const metodoPadre = () => {
        console.log("Este es un metodo del padre");
    };

    return(<div><h1>Saludo desde el padre</h1>
    <SaludoHijo metodoPadre={metodoPadre}/>
 
    <SaludoHijo metodoPadre={metodoPadre}/>
       
    </div>)
    
}

export default SaludoPadre;