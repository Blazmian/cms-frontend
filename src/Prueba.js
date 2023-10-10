import { useState } from "react"

const Prueba =()=>{
    const[contador, setContador]= useState(0)
    
return(
    <div className="d-fex justify-content-center">
        <div style={{textAlign: 'center'}}>
            <h3>Contador de clicks</h3>
                <button onClick={()=> setContador(contador+1)}>Haz click</button>
                <h1 style={{fontSize:'120px'}} className="my-5">{contador}</h1>
        </div>
    
    </div>
)
}
export default Prueba