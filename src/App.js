import logo from './logo.svg';
import React, {Fragment, useEffect, useState} from 'react';
import './App.css';

import TerminalCommand from './components/TerminalCommand';



function App() {

  const [ip, setIp] = useState(null)

  useEffect(()=>{

    var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})

    /*Usage example*/
    findIP.then(ip =>  setIp(ip)).catch(e => console.error(e))

  },[])



  return (
    <div className="App">

      <div style={{color:'white'}}> Hello, im Roland, a Fullstack Javascript Developer <br/>
      I made this terminal looking portfolio from scratch for fun using React and a bit of CSS<br/>
      You can see the github here <a href='https://github.com/rj13371/mtg-web-store'> https://github.com/rj13371/mtg-web-store </a><br/>
      I took inspiration from this website <a href='https://yasfu.net/portfolio/'> https://yasfu.net/portfolio/ </a><br/>
      Contact: mathesonrolanddev@gmail.com <br/>
      User Agent: {window.navigator.userAgent}<br/>
      Last Login: {Date()} <br/>
      Your IP: {ip ? ip : 'Hidden'} <br/>
      =======================================================================================
      </div>

      <TerminalCommand timeout={50} text={'ls'} output={' skills.txt contact.txt aboutme.txt projects.txt '}/>  


      <TerminalCommand timeout={3000} text={'cat skills.txt'} output={'Javascript, HTML, CSS, React, NodeJS/Express, Github, Linux CLI'}/>

      <TerminalCommand timeout={6000} text={'cat aboutme.txt'} output={'I am a self taught Fullstack Javascript Developer since April 2021 currently learning the MERN tech stack. In January of 2021 I graduated with a Bachelors in Political Science but decided to learn software development after wanting to pursue a career as a software engineer. While im not programming I enjoy travelling, playing card games and listening to 80s Japanese Pop Hits Living in 🗼Tokyo, Japan 🇯🇵 Originally from 🇨🇦'}/>

      <TerminalCommand timeout={10000} text={'cat projects.txt'} output={<Fragment><a href='https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts' > Financially Intelligent NFTS </a> FIN is a platform for users to purchase positions on cryptocurrencies that are automated to sell based on a max profit or stop loss price parameter.
      <br/><a href='https://mtgwebstore.herokuapp.com/' > Bastion Games Hobby Store </a> A fully fleshed out e-commerce website for a local hobby store.  <br/>
    <a href='https://irezumi-hub.herokuapp.com/tattooShops' > Irezumi Hub </a> A website for Tattoo Artists and Canvasas in Japan to create Tattoo Parlours and lookup store information online using Cloudinary and Mapbox API.<br/>
    <a href='https://rolandcryptoexchange.herokuapp.com/' > Rolands Crypto Exchange </a>My first ever web application. Built with Create React App and using coingecko API to retrieve cryptocurrency prices<br/>
    <a href='https://rolandmatheson.com' > My main portfolio website </a> V1
    </Fragment>
    }/>


      <TerminalCommand timeout={11000}  lastCommand={true} text={''} output={''}/>


    </div>
  );
}

export default App;