import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked", + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = ()=>{
        // console.log("Loercase was clicked", + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success"); 
    }
    const handleClearClick = ()=>{
        // console.log("Loercase was clicked", + text);
        let newText = '';
        setText(newText); 
        props.showAlert("Text Cleared", "success");
    }
    const handleOnchange = (event)=>{                                               
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    props.showAlert("Extra Spaces Removed", "success");


    const [text, setText] = useState('')
    // setText("Shubham Jaydas Yeram");
    return (
        <>
            <div className='container' style={{color: props.mode === `dark`?`white`:`black`}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === `dark`?`grey`:`white`, color: props.mode === `dark`?`white`:`black`}} onChange={handleOnchange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style={{color: props.mode === `dark`?`white`:`black`}}>
                <h3>Your Text Summery</h3>
                <p>{text.split(" ").length} words and {text.length} chracters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    
  )
}
