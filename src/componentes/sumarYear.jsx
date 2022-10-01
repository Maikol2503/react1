import React from 'react';
import '../css/year.css';
import { useState } from 'react';
import Boton from './boton';
import Input from './input';
import CuadroContador from './cuadroContador';
import Alerta from './alerta';

function SumarYear(){

let yearActual = new Date().getFullYear();
const [year, setYear] = useState(yearActual);

const mas = () =>{
    setYear(year + 1);
}

const menos = () =>{
    setYear(year - 1);
}

    const actualizarYear = () =>{
        let input = document.querySelector(".input").value
        let alerta = document.querySelector(".alerta1");
        
            if(input >= 0 || input == ""){
                if(input.length > 3 ){
                    let num = parseInt(input);
                    setYear(num)
                    document.querySelector(".input").value = "";
                    eliminarAlerta()
                } 
                else{
                    alerta.textContent = "Debes ingresar mas de 3 numeros";
                }    
            }  
            else{
                alerta.textContent = "Debes ingresar solo numeros positivos";
            }
            function eliminarAlerta(){
                alerta.textContent = "";
            }
    }

    return(
        
        <div className='cuadro'>
            <div className='cuadroSumaeYear'>
                <CuadroContador numero={year}/>
                <Alerta mensaje={Alerta} clase='alerta1 a'/>
                <div className='yearBotones'>
                    <Boton clase='mas' nombre='+' funcion={mas} />
                    <Boton clase='menos' nombre='-' funcion={menos} />
                </div>
                <div className='yearActualizar'>
                    <Input type='number' clase='input'/>
                    <Boton clase='actualizarYear' nombre='Cambiar' funcion={actualizarYear} />
                </div>
            </div>
        </div>
    )
}

export default SumarYear;