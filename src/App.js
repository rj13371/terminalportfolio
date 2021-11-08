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
      You can see the github here <a href='https://github.com/rj13371/terminalportfolio'> https://github.com/rj13371/mtg-web-store </a><br/>
      I took inspiration from this website <a href='https://yasfu.net/portfolio/'> https://yasfu.net/portfolio/ </a><br/>
      Contact: mathesonrolanddev@gmail.com <br/>
      User Agent: {window.navigator.userAgent}<br/>
      Last Login: {Date()} <br/>
      Your IP: {ip ? ip : 'Hidden'} <br/>
      =======================================================================================
      </div>

      <TerminalCommand timeout={50} text={'ls'} output={'rolandHistory.txt skills.txt contact.txt aboutme.txt projects.txt '}/>  


      <TerminalCommand timeout={3000} text={'cat skills.txt'} output={'Javascript, HTML, CSS, React, NodeJS/Express, Github, Linux CLI'}/>

      <TerminalCommand timeout={6000} text={'cat aboutme.txt'} output={'I am a self taught Fullstack Javascript Developer since April 2021 currently learning the MERN tech stack. In January of 2021 I graduated with a Bachelors in Political Science but decided to learn software development after wanting to pursue a career as a software engineer. While im not programming I enjoy travelling, playing card games and listening to 80s Japanese Pop Hits Living in 🗼Tokyo, Japan 🇯🇵 Originally from 🇨🇦'}/>

      <TerminalCommand timeout={10000} text={'cat projects.txt'} output={<Fragment><a href='https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts' > Financially Intelligent NFTS </a> FIN is a platform for users to purchase positions on cryptocurrencies that are automated to sell based on a max profit or stop loss price parameter.
      <br/><a href='https://mtgwebstore.herokuapp.com/' > Bastion Games Hobby Store </a> A fully fleshed out e-commerce website for a local hobby store.  <br/>
    <a href='https://irezumi-hub.herokuapp.com/tattooShops' > Irezumi Hub </a> A website for Tattoo Artists and Canvasas in Japan to create Tattoo Parlours and lookup store information online using Cloudinary and Mapbox API.<br/>
    <a href='https://rolandcryptoexchange.herokuapp.com/' > Rolands Crypto Exchange </a>My first ever web application. Built with Create React App and using coingecko API to retrieve cryptocurrency prices<br/>
    <a href='https://rolandmatheson.com' > My main portfolio website </a> V1
    </Fragment>
    }/>

<TerminalCommand timeout={12000} text={' history | grep "roland" '} output={
<Fragment>
1 touch rolandHistory.txt <br/>
2 echo rolandHistory.txt <br/>
3 nano rolandHistory.txt <br/>
42 history | grep "roland" <br/>
</Fragment>
} />

<TerminalCommand timeout={14000} text={' cat rolandHistory.txt '} output={
<Fragment>
Jan 2021 Finish University Degree for Political Science <br/>
Feb 2021 Look into studying to become a Software Engineer  <br/>
March 2021 Sign up for Code Chrysalis Foundations Intro to Programming Course <br/>
May 2021 Finish with basic knowledge of Javascript, HTML and CSS <br/>
June 2021 Continue studying on my own through Udemy Courses and Youtube, took Colt Steeles Fullstack WebDev Course <br/>
July 2021 Finish Course and build two projects, a simple React App and a Express App with CRUD and Restful API design <br/>
August 2021 Start working on a Fullstack React/NodeJS App for a local Card Store in Canada with small team<br/>
Sept 2021 Enter Ethereum Hackathon to learn about dApp development, win 2nd and 3rd place prize with Team FIN<br/>
Oct 2021 Finish MVP for E commerce site and continue to learn the MERN stack, also learning Linux CLI which inspired this website! <br/>
Nov 2021 Currently in several Hackathons and continuing to push to git everyday, started job hunt <br/>
</Fragment>
} />

<TerminalCommand timeout={18000} text={'cat contact.txt'} output={' rolandmathesondev@gmail.com https://www.linkedin.com/in/rolandmatheson/ github.com/rj13371 '} />

      <TerminalCommand timeout={19000}  lastCommand={true} text={''} output={''}/>


    </div>
  );
}

export default App;