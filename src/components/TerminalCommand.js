import React, { useEffect, useState, Fragment } from 'react'
import '../App.css';
import TerminalOutput from './TerminalOutput';

export default function TerminalCommand(props) {

    const [isTyping, setIsTyping]  = useState(false)

    const [isFinished, setIsFinsihed]  = useState(false)

    useEffect(()=>{

        let timerFunc = setTimeout(() => {
            setIsTyping(true);
          }, props.timeout);

          if (!props.lastCommand) {

          let boxFunc = setTimeout(() => {
            setIsFinsihed(true);
          }, props.timeout + 1000);
        }


    },[])



    return (
        <Fragment> 
<div className="terminal">

  { isTyping?  <Fragment> <div className="terminalHome" > 
  roland@roland-terminal-portfolio:<b style={{color:'powderblue'}}>~/portfolio</b> <b style={{color:'white'}}>$</b> 
  </div> <div className="terminalText" style={ props.lastCommand? null : {width: '15em'}} > {props.text}  </div> </Fragment> : null }


     { isTyping && !isFinished ? <div className='blinkCmd'> ▮ </div> : null } 
</div>

{ isFinished ?       <TerminalOutput text={props.output} /> 
  : null }

</Fragment>
    )
}
