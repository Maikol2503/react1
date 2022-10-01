import React from 'react';
import Cubo from './cubo';
import '../css/cubos.css';
import '../css/colore.css'

function Colores(){

    const Azul = ()=>{
        document.querySelector(".verde").classList.remove("none");
        document.querySelector(".azul").classList.add("none");
    }
    
    const Verde = ()=>{
        document.querySelector(".azul").classList.remove("none");
        document.querySelector(".verde").classList.add("none");
    }

    return(
    <div className='cuadro'>
        <div className='cuadroCubo'>
            <Cubo clase='azul none'  funcion={Azul}/>
            <Cubo clase='verde'  funcion={Verde}/>
        </div>
    </div>
    )
}


export default Colores;