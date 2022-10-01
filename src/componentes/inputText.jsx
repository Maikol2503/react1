import React from 'react';
import Input from './input';
import Boton from './boton';
import Parrafo from './parrafo';
import Alerta from './alerta';
import '../css/inputText.css';
import check from '../comprobar.png';

function InpuTexto(){ 
    let  alerta;

    const probar = () =>{
        let input5 = document.querySelector('.input5').value;
        let alerta5 = document.querySelector('.alerta5')
        if(input5.length > 10){
        
            alerta5.textContent = "el maximo es 10 caracteres";
            document.querySelector(".img1").classList.remove("visible");
        } 
        else{

            if(input5.length > 3){
                document.querySelector(".img1").classList.add("visible");
                eliminarA();
            } 
            else{
                alerta5.textContent ="debes ingresar mas de 3 caracteres";
                document.querySelector(".img1").classList.remove("visible");
            }
        }
        function eliminarA(){
            alerta5.textContent = "";
        }
    }
    return(
        <div className='cuadro'>
            <div className='cuadroInput'>
                <Parrafo texto='Min 3 Max 10' clase='tituloInputText' />
                <div className='aler2'>
                    <Alerta mensaje={alerta} clase='alerta5'/>
                    <img src={check} alt="" className='img1' />
                </div>
                <div>
                    <Input type='text' clase='input5'/>
                </div>
                <Boton nombre='Probar' clase='boton1' funcion={probar}/>
            </div>
        </div>

    )
}

export default InpuTexto;