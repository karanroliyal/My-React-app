import React, { useState } from 'react';

export default function TextForm(props) {
    const [Text, setText] = useState("");

    function handelOnChange(event) {
        console.log("hello");
        setText(event.target.value);
    }
    function handelUpClick() {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Upper case", "success");
    }
    function handelLoClick() {
        let newLoText = Text.toLowerCase();
        setText(newLoText);
        props.showAlert("Converted into Lower case", "success");
    }
    function handelCapClick() {

        var splitStr = Text.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        setText(splitStr.join(' '));
        props.showAlert("Capitalized done!", "success");
    }
    function handelClearClick() {
        // let newClText = Text;
        // let temp = newClText;
        setText("");
        props.showAlert("Cleared text!", "success");
    }
    return (
        <>
            <div className={`container  `} >
                <div className="mb-3">
                    <h1 className={`my-2  text-${props.mode==='dark'?'white':'black'}`}>{props.heading}</h1>
                    <textarea className="form-control "   id="exampleFormControlTextarea1" value={Text} onChange={handelOnChange} rows="9" placeholder='Type here....'></textarea>

                    <button className="btn btn-primary my-2" onClick={handelUpClick} >Convert to Upper case</button>
                    <button className="btn btn-danger my-2 mx-2" onClick={handelLoClick}>Convert to Lower case</button>
                    <button className="btn btn-warning my-2 mx-0.5" onClick={handelCapClick}>Convert to Capitalise case</button>
                    <button className="btn btn-success my-2 mx-2" onClick={handelClearClick}>Clear text</button>
                </div>
            </div>
            <div className={`container   text-${props.mode==="light"?'dark':'light'}`} >
                <h1>Text summary </h1>
                <p><b>{Text.split(" ").length}</b> word and <b>{Text.length}</b> character</p>
                <p><b>{0.008 * Text.split(" ").length}</b> Minutes read </p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </>
    );
}
