import React from 'react';

const Alerta = ({mensaje, clase}) => (
    <p className={clase}>{mensaje}</p>
);

export default Alerta;