import React, { Component } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Prateleira from '../Components/Prateleira';
import Footer from '../Components/Footer';


class Home extends Component {
  render() {
    return (
      <div className="tudo">
        <Header></Header>
        <Banner></Banner>
        <Prateleira></Prateleira>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
