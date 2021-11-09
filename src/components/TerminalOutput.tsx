import React from 'react'
import '../App.css';


type Props = {
  readonly text: React.ReactNode;
};

 const TerminalOutput: React.FC<Props> = ({text}) => {
    return (
<div className="terminal"> 
<div style={{color:'white'}}>

{text}

</div>
</div> 
    )
}

export default TerminalOutput