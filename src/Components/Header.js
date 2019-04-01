import React, { Component } from 'react';
import '../CSS/Header.css';
import Logo from '../Img/ImgHeader/LogoHeader.svg';
import Lupa from '../Img/ImgHeader/LupaHeader.svg';
import Avatar from '../Img/ImgHeader/AvataHeader.svg';
import Carrinho from '../Img/ImgHeader/MinicartHeader.svg';
import Idiomas from '../Img/ImgHeader/IdiomasHeader.svg';
import MenuMobi from '../Img/ImgHeader/MenuMobiHeader.svg';
import Excluir from '../Img/ImgHeader/Excluir.svg';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      lado: '-500%',
      largura: '',
      altura: '',
    }
  }
  render() {
        const menuMobi = ()=>{     
         
          const largura = window.screen.availWidth;
          const altura =   window.screen.availHeight;
          this.setState({ lado: -20 })
          this.setState({ largura })
          this.setState({ altura })
      }
        const fechaMenu = ()=>{     
          this.setState({ lado: '-500%'})
      }
      


    return (
      <div className="container">
        <div className="header">
          <div className="menuMobi">
            <img onClick={menuMobi} src={MenuMobi}/>
          </div>
          <div 
            style={{ 
              
              position: "absolute",
              width: this.state.largura, 
              height: this.state.altura, 
              background: "white", 
              zIndex:2,
              left: this.state.lado,
              transition: "left 1s",
              top: 0,
              display: "flex",
              justifyContent: "center",
              paddingTop: 5,
              }}>
              <div style={{background: "#FF9F1C", display: "flex", justifyContent:"space-between",height:60, width:"100%", marginTop:-7}}>
                <h3 style={{ position: "relative", left:20,top:-4,color: "#FFFFFF" }}>Menu</h3>
                <img style={{ position: "relative", left:0,top:0, paddingRight: 10 }} src={Excluir}
                onClick={fechaMenu}
                  />
              </div>
            </div>
          <div className="logo">
            <img className="logoMobi" src={Logo}/>
          </div>
          <div className="busca">
            <input type="text" placeholder="O que você está procurando?"/>
            <img className="lupa" src={Lupa}/>
            
          </div>
          <div className="minhaConta">
            <span className="account">
              <img src={Avatar}/>
              Minha Conta
            </span>
            <div className="miniCart">
              <img src={Carrinho}/>
            </div>
            
            <div className="idiomas">
              <img src={Idiomas}/>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Header;
