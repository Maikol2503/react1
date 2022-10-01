import React from 'react';
import logo from '../logo.svg';

function Header(props){

    let arrayNav = ["Noticias","Contactos","Acerca de nosotros"]
    return (
        <header>
            <div className='header'>
                <ul className='logo'>
                    <a href="#"><li><img  className="logoImg" src={logo} alt="" /><p>{props.title}</p></li></a>
                </ul>
                <ul className='listaNav'>
                    {arrayNav.map(element => {
                        return (<li>{element}</li>)
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header;