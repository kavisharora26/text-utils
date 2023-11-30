import React, {useState} from 'react'

export default function (props) {
    const handleupclick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleloclick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleclearclick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared!","success")
    }
    const handlecopyclick = () =>{
        let newText = text;
        navigator.clipboard.writeText(newText);
        props.showAlert("Copied to clipboard Successfully!","success")
    }

    const handlespaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Done","success")
    }



    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className={`container mb-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h1 className='my-2'>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='light'?'white':'darkblue', color: props.mode==='light'?'black':'white'}}></textarea>
                <button disabled={text.length===0} className='btn btn-primary my-1' onClick={handleupclick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary my-1 mx-1' onClick={handleloclick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary my-1 mx-1' onClick={handleclearclick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary my-1 mx-1' onClick={handlecopyclick}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary my-1 mx-1' onClick={handlespaces}>Remove Extra Spaces</button>
            </div>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>It takes on an average {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes for you to read the text.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
