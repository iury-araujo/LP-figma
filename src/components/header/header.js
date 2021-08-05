import React from 'react'
import Logo from '../../img/logo.png'
import Menu_mobile from '../../img/menu-mobile.png'

function Cabecalho() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="singin">
        <span>Sign up</span>
      </div>
      <img src={Menu_mobile} alt="" className="menu-mobile"></img>
    </header>
  );
}

export default Cabecalho;
