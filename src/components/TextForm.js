import React,{useState} from 'react'
// hooks inreactjs

export default function TextFrom(props) {
  const [text,setText]=useState("")
  const handleUpClick=()=>{

   let newText=text.toUpperCase();
   setText(newText)
   props.showAlert("Converted to UpperCase","success")
  }
  const handleLoClick=()=>{
   let newText=text.toLowerCase();
   setText(newText)
   props.showAlert("Converted to LowerCase","success")

  }
  const handleOnChange=(event)=>{
    console.log("ON change")
    setText(event.target.value)

  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join(" ");
    setText(newText);
   props.showAlert("Capitalized the Words","success")

}
// we can create a button such that it will copy the entire text->code in threoy.txt
const RemoveExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  // removes the extra spaces and made all of it as a array then we join that array
setText(newText.join(" "));
props.showAlert("Removed the ExtraSpaces","success")
}
const handleClearText=()=>{
  let newText=''
  setText(newText)
  props.showAlert("Cleared The Text","success")
}


  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <div className="m-3">
        <h3 className='mb-4'>{props.title}</h3>
        <div className="form-floating">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea2" style={{height:10+'em',backgroundColor:props.mode==='light'?'white':'#80808036',color:props.mode==='light'?'black':'white',fontWeight:'Bold'}} ></textarea>
        </div>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To LowerCase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCapitalize}>Convert To Captilize</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={RemoveExtraSpaces}>Remove ExtraSpaces</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearText}>Clear text</button>


      

    </div>
    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
      <p>{(.008*text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length).toFixed(2)} Minutes to read the written content</p>
      <h4>Preview of the Written Data</h4>
      <p>{text.length>0?text:"Write Something To Preview Your Text"}</p>
    </div>
    </>
  )
}
