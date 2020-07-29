import React from 'react';
import Logo from '../../assets/images/logo.png'
import './Menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <header className="Menu">
            <Link to="/">
                <img src={Logo} alt="Devflix logo" className="Logo" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo Vídeo</Button>
        </header>
    );
}

export default Menu;