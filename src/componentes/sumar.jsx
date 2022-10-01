import React from 'react';
import '../css/suma.css'
import Input from './input';
import Boton from './boton';
import Parrafo from './parrafo';
import Alerta from './alerta';

function Sumar(){

    const sum = () =>{
        let input3 = parseFloat(document.querySelector(".input3").value);
        let input4 = parseFloat(document.querySelector(".input4").value);
        let alerta = document.querySelector(".alerta3");
        
          if(input3 && input4){
            let p2 = document.querySelector(".resultadoS");
            p2.innerHTML = input3 + input4;
            eliminarAlerta();
          } else{
            alerta.textContent = 'Debes rellenar todos los campos';
          }
        
          function eliminarAlerta(){
            alerta.textContent = "";
          }
        
        }

   return(
    <div className='cuadroSumar'>
        <Parrafo clase='resultadoS' texto='0' />
        <Alerta mensaje={Alerta} clase='alerta3 a'/>
        <div className='inputSuma'>
          <Input type='number' clase='input3'/>
          <Parrafo clase='p3' texto='+' />
          <Input type='number' clase='input4'/>
        </div>
          <Boton clase='sumaBoton' nombre='sumar' funcion={sum} />
    </div>
   )


}  




export default Sumar;