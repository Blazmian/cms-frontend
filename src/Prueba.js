import { useEffect, useState } from "react"

const Prueba = () => {

    //useState -
    //useEffect - 
    //useNavigate - Dirigirse a un link
    useEffect(() =>{
        setMensaje('asd')
    }, [mensaje])

    const [mensaje, setMensaje] = useState('asd')
    const [contador, setContador] = useState(0)
    return (
        <div className="d-flex justify-content-center p-4">
            <div style={{textAlign:'center'}}>
                <h3>Contador de clics</h3>
                <button onClick={() => setContador(contador+1)}>Click</button>
                <h1 style={{fontSize:'160px', marginTop:'30px'}}>{contador}</h1>
                <p>hi</p>
            </div>
        </div>
    )
}

export default Prueba