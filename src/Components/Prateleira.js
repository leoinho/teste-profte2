import React, { Component } from 'react';
import '../CSS/Prateleira.css';
import Tenis from '../Img/ImgPrateleira/Tenis.png';
import Car from '../Img/ImgPrateleira/Carrinho.svg';
import Star from '../Img/ImgPrateleira/Star.svg';
import TenisPequeno from '../Img/ImgPrateleira/TenisPequeno.png';
import DescontoMobi from '../Img/ImgPrateleira/DescontoMobi.svg';
import Excluir from '../Img/ImgHeader/Excluir.svg';

import swal from 'sweetalert'

class Prateleira extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'none',
            contador: 0,
            total: 0,
            carrinho: [],
            produtosMobi: [
                {   
                    nome: "Tenis couro Puma R698 Q4 V1",   
                    precoAntigo: 'de R$ 299,00',
                    precoNovo: '299,00',
                    parcela: 'ou em 3x de R$ 133,00',
                    desconto: '',
                    imagem: TenisPequeno
                },
                {     
                    nome: "Tenis couro Puma R698 Q4 V2",              
                    precoAntigo: 'de R$ 299,00',
                    precoNovo: '399,00',
                    parcela: 'ou em 3x de R$ 133,00',
                    desconto:<svg width="82" height="73" viewBox="0 0 82 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M82 72.0408L0.639969 1.52588e-05L82 1.52588e-05L82 72.0408Z" fill="#FF9F1C"/>
                            <path d="M44.175 22.2491C44.175 22.9059 44.2556 23.5051 44.4169 24.0467C44.5783 24.5768 44.8087 25.032 45.1083 25.4122C45.4195 25.781 45.794 26.0691 46.2319 26.2765C46.6697 26.4839 47.1652 26.5876 47.7184 26.5876C48.2599 26.5876 48.7497 26.4839 49.1876 26.2765C49.6255 26.0691 49.9942 25.781 50.2938 25.4122C50.6049 25.032 50.8412 24.5768 51.0025 24.0467C51.1638 23.5051 51.2445 22.9059 51.2445 22.2491C51.2445 21.5923 51.1638 20.9988 51.0025 20.4687C50.8412 19.9272 50.6049 19.472 50.2938 19.1032C49.9942 18.723 49.6255 18.4291 49.1876 18.2217C48.7497 18.0143 48.2599 17.9106 47.7184 17.9106C47.1652 17.9106 46.6697 18.0143 46.2319 18.2217C45.794 18.4291 45.4195 18.723 45.1083 19.1032C44.8087 19.4835 44.5783 19.9387 44.4169 20.4687C44.2556 20.9988 44.175 21.5923 44.175 22.2491ZM53.5261 22.2491C53.5261 23.2747 53.3705 24.1792 53.0594 24.9628C52.7598 25.7464 52.3449 26.4032 51.8149 26.9333C51.2963 27.4518 50.6856 27.8436 49.9827 28.1087C49.2798 28.3737 48.5307 28.5062 47.7356 28.5062C46.9405 28.5062 46.1858 28.3737 45.4713 28.1087C44.7684 27.8436 44.1519 27.4518 43.6218 26.9333C43.1033 26.4032 42.6885 25.7464 42.3773 24.9628C42.0662 24.1792 41.9106 23.2747 41.9106 22.2491C41.9106 21.2235 42.0662 20.3247 42.3773 19.5526C42.6885 18.7691 43.109 18.1122 43.6391 17.5822C44.1807 17.0521 44.803 16.6545 45.5059 16.3895C46.2088 16.1245 46.9521 15.992 47.7356 15.992C48.5192 15.992 49.2625 16.1245 49.9654 16.3895C50.6683 16.6545 51.279 17.0521 51.7976 17.5822C52.3277 18.1122 52.7483 18.7691 53.0594 19.5526C53.3705 20.3247 53.5261 21.2235 53.5261 22.2491ZM55.9153 28.2469V16.2685H63.4861V18.118H58.0932V21.1774H62.8811V23.0269H58.0932V28.2469H55.9153ZM65.4355 28.2469V16.2685H73.0063V18.118H67.6134V21.1774H72.4013V23.0269H67.6134V28.2469H65.4355Z" fill="white"/>
                            </svg>,
                    imagem: TenisPequeno             
                },
            ],
            produtos: [
                {   
                    nome: "Tenis couro Puma R698 Q4 V1",   
                    precoAntigo: 'de R$ 299,00',
                    precoNovo: '299,00',
                    parcela: 'ou em 3x de R$ 133,00',
                    desconto: '',
                    imagem: TenisPequeno
                },
                {     
                    nome: "Tenis couro Puma R698 Q4 V2",              
                    precoAntigo: 'de R$ 299,00',
                    precoNovo: '399,00',
                    parcela: 'ou em 3x de R$ 133,00',
                    desconto:<svg width="82" height="73" viewBox="0 0 82 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M82 72.0408L0.639969 1.52588e-05L82 1.52588e-05L82 72.0408Z" fill="#FF9F1C"/>
                            <path d="M44.175 22.2491C44.175 22.9059 44.2556 23.5051 44.4169 24.0467C44.5783 24.5768 44.8087 25.032 45.1083 25.4122C45.4195 25.781 45.794 26.0691 46.2319 26.2765C46.6697 26.4839 47.1652 26.5876 47.7184 26.5876C48.2599 26.5876 48.7497 26.4839 49.1876 26.2765C49.6255 26.0691 49.9942 25.781 50.2938 25.4122C50.6049 25.032 50.8412 24.5768 51.0025 24.0467C51.1638 23.5051 51.2445 22.9059 51.2445 22.2491C51.2445 21.5923 51.1638 20.9988 51.0025 20.4687C50.8412 19.9272 50.6049 19.472 50.2938 19.1032C49.9942 18.723 49.6255 18.4291 49.1876 18.2217C48.7497 18.0143 48.2599 17.9106 47.7184 17.9106C47.1652 17.9106 46.6697 18.0143 46.2319 18.2217C45.794 18.4291 45.4195 18.723 45.1083 19.1032C44.8087 19.4835 44.5783 19.9387 44.4169 20.4687C44.2556 20.9988 44.175 21.5923 44.175 22.2491ZM53.5261 22.2491C53.5261 23.2747 53.3705 24.1792 53.0594 24.9628C52.7598 25.7464 52.3449 26.4032 51.8149 26.9333C51.2963 27.4518 50.6856 27.8436 49.9827 28.1087C49.2798 28.3737 48.5307 28.5062 47.7356 28.5062C46.9405 28.5062 46.1858 28.3737 45.4713 28.1087C44.7684 27.8436 44.1519 27.4518 43.6218 26.9333C43.1033 26.4032 42.6885 25.7464 42.3773 24.9628C42.0662 24.1792 41.9106 23.2747 41.9106 22.2491C41.9106 21.2235 42.0662 20.3247 42.3773 19.5526C42.6885 18.7691 43.109 18.1122 43.6391 17.5822C44.1807 17.0521 44.803 16.6545 45.5059 16.3895C46.2088 16.1245 46.9521 15.992 47.7356 15.992C48.5192 15.992 49.2625 16.1245 49.9654 16.3895C50.6683 16.6545 51.279 17.0521 51.7976 17.5822C52.3277 18.1122 52.7483 18.7691 53.0594 19.5526C53.3705 20.3247 53.5261 21.2235 53.5261 22.2491ZM55.9153 28.2469V16.2685H63.4861V18.118H58.0932V21.1774H62.8811V23.0269H58.0932V28.2469H55.9153ZM65.4355 28.2469V16.2685H73.0063V18.118H67.6134V21.1774H72.4013V23.0269H67.6134V28.2469H65.4355Z" fill="white"/>
                            </svg>,
                    imagem: TenisPequeno             
                },
                {
                    nome: "Tenis couro Puma R698 Q4 V3",
                    precoAntigo: 'de R$ 299,00',
                    precoNovo: '499,00',
                    parcela: 'ou em 3x de R$ 133,00',
                    desconto:'',
                    imagem: TenisPequeno
                },
                {
                    nome: "Tenis couro Puma R698 Q4 V4",
                    precoAntigo: 'de R$ 299,00',
                    precoNovo: '599,00',
                    parcela: 'ou em 3x de R$ 133,00',
                    desconto:'',
                    imagem: TenisPequeno
                },
            ]
        }
    }
    excluir = item=>{
        
        const num = this.state.contador;
        const resul = num - 1;
        this.setState({ contador: resul })
        var index = this.state.carrinho.indexOf(item);
        this.state.carrinho.splice(index,1)
        console.log(item.precoNovo)
        var tot = this.state.total;
        tot -= parseInt(item.precoNovo);
        this.setState({ total: tot })
        swal({
            icon: "error",
            text: "O produto foi excluido do carrinho!",
          });

    }
    compra = produto =>{
        const num = this.state.contador;
        const resul = num + 1;
        this.setState({ contador: resul })
        this.state.carrinho.push(produto)
        var tot = 0;
        for(var i = 0; i < this.state.carrinho.length; i++){        
            tot += parseInt(this.state.carrinho[i].precoNovo);
            this.setState({ total: tot })

        }
        swal({
            icon: "success",
            text: "O produto foi adicionado ao carrinho!",
          });
      }
  render() {
    const abreCarrinho = ()=>{    
         
        this.setState({ display: 'block' })
    }

      const fechaCarrinho = ()=>{     
        this.setState({ display: 'none' })
    }
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
        <div>
            <div className="alinhaCarrinho">
                <div className="carrinho" 
                style={{ display: this.state.display,  }}>
                    <div style={{background: "#FF9F1C", display: "flex", justifyContent:"space-between",height:60, width:"100%", marginTop:-7}}>
                        <h2 style={{ position: "relative", left:20,top:-4,color: "#FFFFFF" }}>Carrinho</h2>
                        <img src={Excluir} onClick={fechaCarrinho} style={{ }}/>
                        
                    </div>
                    {this.state.carrinho.map((item)=>{
                        return(
                            <div className="itensCarrinho">
                                <img src={item.imagem}/>
                                <p>{item.nome}</p>
                                <p>{item.precoNovo}</p>
                                <p onClick={()=> this.excluir(item)}>X</p>
                            </div>
                        );
                    })}
                    <div className="total">
                        
                        <h4>Total = R$ {this.state.total},00</h4>
                    </div>
                </div> 
            </div> 
        <div className="container">
        <div className="principal">
            <div className="container">
            <div onClick={abreCarrinho} className="contador">
                <p>{ this.state.contador }</p>
            </div>
            
            </div>
            <div className="prateleira">
                <div className="tituloPrateleira">
                    
                        <h2 className="titulo">Produtos</h2>
                    
                </div>

                    <div className="produtos">     
                        <div className="alinhaProduto">
                            
                            {this.state.produtos.map((prod) =>{
                                    return(
                                        
                                        <div  className="produto" >
                                            <div className="desconto">{ prod.desconto }</div>
                                            <img src={Tenis} className="tenis"/>
                                            <p className="nomeProduto">{ prod.nome }</p>
                                            <img src={Star} className=""/>
                                            <p className="precoAntigo">{prod.precoAntigo}</p>
                                            <p className="precoNovo">por R$ {prod.precoNovo}</p>
                                            <p className="parcela">{prod.parcela}</p>

                                            <div onClick={()=> this.compra(prod) } className="btn">
                                                <img className="car" src={Car}/> 
                                                <p className="textoBtn">comprar
                                                </p> 
                                            </div>              
                                        </div>
                                    );
                                })
                            }   
                        </div>
                        <div className="alinhaMobi">

                        {this.state.produtosMobi.map((prod) =>{
                                    return(
                                        
                                        <div  className="produtoMobi" >
                                            <div className="desconto">{ prod.desconto }</div>
                                            <img src={TenisPequeno} className="tenis"/>
                                            <p className="nomeProduto">{ prod.nome }</p>
                                            <img src={Star} className=""/>
                                            <p className="precoAntigo">{prod.precoAntigo}</p>
                                            <p className="precoNovo">por R$ {prod.precoNovo}</p>
                                            <p className="parcela">{prod.parcela}</p>

                                            <div onClick={()=> this.compra(prod) } className="btn">
                                                <img className="car" src={Car}/> 
                                                <p className="textoBtn">comprar
                                                </p> 
                                            </div>              
                                        </div>
                                    );
                                })
                            }   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

export default Prateleira;
