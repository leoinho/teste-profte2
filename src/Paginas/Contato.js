import React, { Component } from 'react';
import '../CSS/Contato.css';
import Logo from '../Img/ImgHeader/LogoHeader.svg';
import LogoFooter from'../Img/ImgFooter/LogosFooterMobi.svg';


class Contato extends Component {
  render() {
    return (
      <div >
        <div className="headerContato">
          <img src={Logo}/>
        </div>
        <div className="divForm">
          <form>
            <div className="alinhaForm">
              <label >Nome:  </label>
              <input type="texto" id="nome" name="nome_usuario"></input>
            </div>
            <div className="alinhaForm">
              <label >E-mail:  </label>
              <input type="email" id="email" name="email_usuario"></input>
            </div>
            <div className="alinhaForm">
              <label >Texto:  </label>
              <textarea id="texto" name="texto_usuario"></textarea>
            </div>
            <div className="alinhaForm" >
              <button type="submit">Enviar</button>
            </div>
          </form>
          
        </div>
        <div className="footerContato">
          <img src={LogoFooter}/>
        </div>
      </div>
    );
  }
}

export default Contato;
