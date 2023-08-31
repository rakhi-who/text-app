

import React , {useState} from 'react'


export default function Text(props) {
    const handleupclick = ()=>{
        
  const newtext=text.toUpperCase();
  setText(newtext);
    }
    const remove = ()=>{
    
       
        setText(" ");
          }
    const click = ()=>{
       
        const newtext=text.toLowerCase();
        setText(newtext);
          }
    const handleonchange = (event)=>{

setText(event.target.value);
    }

           
        
    const [ text, setText] = useState(' ');

  return (
<div className='container my-2'>
<h1>{props.heading}</h1>
<div className="input-group my-2">
    
   
 <textarea className="form-control" onChange={handleonchange} id="my-box" rows="8" value={text}></textarea>
  </div>
<button onClick={remove} className="btn btn-primary
">remove text</button>
<button onClick={handleupclick} className="btn btn-outline mx-2
">uppercase</button>
<button onClick={click} className="btn btn-outline mx-2
">lowercase</button>


<div className="container my-3">

<h1>your summary</h1>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length } per minutes reading speed</p>
<h3>preview</h3>
<p>{text}</p>
</div>
</div>
  )
}
