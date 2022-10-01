import React from 'react';
import '../css/coches.css'


function TablaDeCoches(){

const coches = [
  {id:1,  modelo: 'BMW x1',       matricula:'123456789',    color:'rojo '},
  {id:2,  modelo: 'BMW x6',       matricula:'123456789',    color:'azul' },
  {id:3,  modelo: 'BMW serie 1',  matricula:'123456789',    color:'negro'},
  {id:4,  modelo:'Audi A1' ,      matricula:'3654785960' ,  color:'negro' },
  {id:5,  modelo:'Audi A3' ,      matricula:'3654785960' ,  color:'gris' },
  {id:6,  modelo:'Audi e-trom' ,  matricula:'3654785960' ,  color:'verde' },
  {id:7,  modelo:'Bugatti' ,      matricula:'4786987080' ,  color:'rojo' },
  {id:8,  modelo:'Bugatti' ,      matricula:'4786987080' ,  color:'gris' },
  {id:9,  modelo: 'Cadillac ATS', matricula: '4786907086',  color:'amarillo' },
  {id:10, modelo: 'Cadillac CT6', matricula: '4786907086',  color:'naranja' },
  {id:11, modelo: 'Cadillac CTS', matricula: '4786907086',  color:'negro' },
 ]


   return(
        <div className='cuadro'>
            <div className='cuadroTablaCoche'>
                <table className='tablaCoche'>
                        <tr className='tr1'>
                            <th>Modelo</th>
                            <th>Matricula</th>
                            <th>Color</th>
                        </tr>
                        {coches.map(coche => {
                            return(
                                <tr>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.matricula}</td>
                                    <td>{coche.color}</td>
                                </tr>
                            )
                        })}
                </table>
            </div>
        </div>
   )




}




export default TablaDeCoches;