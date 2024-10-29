import React, {useState, useEffect, useRef} from 'react'

function Stopwatch(){
    
    const [rodando, setRodando] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalo = useRef(null)
    const iniciarTempo = useRef(0)

    useEffect(() =>{
        if(rodando){
            intervalo.current = setInterval(() => {
                setElapsedTime(Date.now()-iniciarTempo.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalo.current)
        }
    },[rodando])

    function Iniciar(){
        setRodando(true)
        iniciarTempo.current = Date.now() - elapsedTime
    }
    function Encerrar(){
        setRodando(false)
    }
    function Reiniciar(){
        setElapsedTime(0)
        setRodando(false)
    }
    function Formatar(){

        let horas = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutos = Math.floor(elapsedTime / (1000 * 60) % 60)
        let segundos = Math.floor(elapsedTime / (1000) % 60)
        let milisegundos = Math.floor(elapsedTime % (1000) / 10)

        horas = String(horas).padStart(2, "0")
        minutos = String(minutos).padStart(2, "0")
        segundos = String(segundos).padStart(2, "0")
        milisegundos = String(milisegundos).padStart(2, "0")

        return `${horas}:${minutos}:${segundos}:${milisegundos}`
    }

    return(
        <>
        <h1>Stopwatch</h1>
            <div className="stopwatch">
                <div className="display">{Formatar()}</div>
                <div className="controles">
                    <button className='botaoIniciar' onClick={Iniciar}>Iniciar</button>
                    <button className='botaoEncerrar' onClick={Encerrar}>Encerrar</button>
                    <button className='botaoResetar' onClick={Reiniciar}>Reiniciar</button>
                </div>
            </div>
            <h5>Desenvolvido por Bruna Borges <br />Thanks BroCode S2</h5>
        </>
    )
}
export default Stopwatch