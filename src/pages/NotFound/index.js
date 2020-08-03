import React from 'react';
import './NotFound.css';
import Logo from '../../assets/images/notfound.gif';

function NotFound() {
  return (
    <div className="NotFound">
      <img src={Logo} alt="gif of a computer crashing by not found page" className="Logo" />
      <h1>404</h1>
      <h2>Página não encontrada</h2>      
    </div>
  );
}

export default NotFound;
