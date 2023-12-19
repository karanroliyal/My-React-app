import './App.css';
// import About from './customTags/About';
import Navbar from './customTags/Navbar';
import Alert from './customTags/Alert';
import TextForm from './customTags/TextForm';
import React, { useState } from 'react';

// importing router dom 
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const [mode, setmode] = useState('light');
  let makeFunc = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode is Enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' homeText='Home' /*aboutText='About Us'*/ mode={mode} switchMode={makeFunc} />
        <Alert alert={alert} />
        <div className="container">
        <TextForm showAlert={showAlert} heading='Enter text below :' mode={mode} switchMode={makeFunc} />
          {/* <Routes> */}
            {/* <Route path="/about" element={<About  mode={mode} />} /> */}
          {/* </Routes> */}
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter text below :' mode={mode} switchMode={makeFunc} />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router > */}
    </>
  );
}

export default App;
