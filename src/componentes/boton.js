import React from 'react';

const Boton = ({clase , funcion , nombre}) => (
    <button className={clase} onClick={funcion}>{nombre}</button>
);

export default Boton;