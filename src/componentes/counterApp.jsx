import React from 'react';
import '../css/counterApp.css';
import Parrafo from './parrafo';
import Boton from './boton';
import { useState } from 'react';

function CounterApp(){

   const [num, setNum] = useState(0);

    const aumentar = () =>{
        setNum(num + 1)
    }

    const reducir = () =>{
        setNum(num - 1)
    }

    const reset = () =>{
        setNum(0)
    }

    return(
        <div className='cuadro'>
            <div className='cuadroCounterApp'>
                <Parrafo texto='Counter App' clase='parrafoCounterApp'/>
                <div className='numApp'>
                    <Parrafo texto={num} clase='NumeroCounterApp'/>
                </div>
                <div className='botonesApp'>
                    <Boton clase='aumentar' nombre='+' funcion={aumentar}/>
                    <Boton clase='reducir' nombre='-' funcion={reducir}/>
                </div>
                    <Boton clase='reset' nombre='Reset' funcion={reset}/>
            </div>
        </div>
    )
}

export default CounterApp;