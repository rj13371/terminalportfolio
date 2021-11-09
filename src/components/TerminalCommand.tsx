import React, { useEffect, useState, Fragment } from 'react'
import '../App.css';
import TerminalOutput from './TerminalOutput';

type Props = {
  readonly timeout: number;
  readonly text: string;
  readonly output: React.ReactNode;
  readonly lastCommand: boolean;
};


 const TerminalCommand: React.FC<Props> = ({timeout, text, output, lastCommand}) => {

    const [isTyping, setIsTyping]  = useState(false)

    const [isFinished, setIsFinsihed]  = useState(false)

    useEffect(()=>{

        let timerFunc = setTimeout(() => {
            setIsTyping(true);
          }, timeout);

          if (!lastCommand) {

           setTimeout(() => {
            setIsFinsihed(true);
          }, timeout + 1000);
        }

        return () => {
          clearTimeout(timerFunc);
      }


    },[])



    return (
        <Fragment> 
<div className="terminal">

  { isTyping?  <Fragment> <div className="terminalHome" > 
  roland@roland-terminal-portfolio:<b style={{color:'powderblue'}}>~/portfolio</b> <b style={{color:'white'}}>$</b> 
  </div> <div className="terminalText" style={ lastCommand? {width: '0em'} : {width: '15em'}} > {text}  </div> </Fragment> : null }


     { isTyping && !isFinished ? <div className='blinkCmd'> ▮ </div> : null } 
</div>

{ isFinished ?       <TerminalOutput text={output} /> 
  : null }

</Fragment>
    )
}

export default TerminalCommand