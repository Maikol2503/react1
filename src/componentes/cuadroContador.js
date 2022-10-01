import React from 'react';

function CuadroContador({numero}){
    numero = parseInt(numero);
    console.log(numero);

    return(
        <p className='p'>{numero}</p>
    )
}

export default CuadroContador;