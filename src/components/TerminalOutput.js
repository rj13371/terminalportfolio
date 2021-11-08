import React from 'react'
import '../App.css';

export default function TerminalOutput(props) {
    return (
<div className="terminal"> 
<div style={{color:'white'}}>

{props.text}

</div>
</div> 
    )
}
