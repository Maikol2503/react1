
import React from 'react';

const Cubo = ({clase, funcion}) =>{
    return (
        <button className={clase} onClick={funcion}>Click</button>
    )
}

export default Cubo;