import React, {useState, useEffect, useRef} from 'react'

function Stopwatch(){
    
    const [rodando, setRodando] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalo = useRef(null)
    const iniciarTempo = useRef(0)

    useEffect(() =>{

    },[rodando])

function Iniciar(){

}
function Encerrar(){

}
function Reiniciar(){

}
function Formatar(){
    return `00:00:00`
}

    return(
        <>
            <div className="stopwatch">
                <div className="display">{Formatar()}</div>
                <div className="controles">
                    <button className='botaoIniciar' onClick={Iniciar}>Iniciar</button>
                    <button className='botaoEncerrar' onClick={Encerrar}>Encerrar</button>
                    <button className='botaoResetar' onClick={Reiniciar}>Reiniciar</button>
                </div>
            </div>
        </>
    )
}
export default Stopwatch