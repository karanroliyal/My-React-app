import React, { useState } from 'react';

export default function About(props) {
    
    // const [darkyLight, setTap] = useState({
    //     backgroundColor: 'white',
    //     color: 'black',
    // });
    // const [Text, setText] = useState("Enable Dark mode");

    

    // function Mode(){
    //     if (darkyLight.color === 'white') {
    //         setTap({
    //             backgroundColor: 'white',
    //             color: 'black',
    //         })
    //         setText("Enable Dark mode")
    //     }
    //     else {
    //         setTap({
    //             backgroundColor: 'black',
    //             color: 'white',
    //         })
    //         setText("Enable Light mode")
            
    //     }
    // }

    return (
        <div className={`container text-${props.mode==='dark'?'white':'black'}`} /*style={{ darkyLight }}*/>
            <h1 className={`my-2  `}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button text-${props.mode==='dark'?'white':'black'} bg-${props.mode}` } /*style={darkyLight}*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className={`accordion-body  bg-${props.mode} text-${props.mode==='dark'?'white':'black'}`}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.mode==='dark'?'white':'black'} bg-${props.mode}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" /*style={darkyLight}*/ aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className={`accordion-body bg-${props.mode}  text-${props.mode==='dark'?'white':'black'}`}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.mode==='dark'?'white':'black'}  bg-${props.mode}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" /*style={darkyLight}*/ aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode}  text-${props.mode==='dark'?'white':'black'}`}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

