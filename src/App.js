
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
// imrs->
import React, { useState } from 'react'
// react router->importation-->from react router dom quick start
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#282828'
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextChanger" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/aboutus" element={<AboutUs mode={mode} />}></Route>
            <Route path="/" element={<TextForm title="Enter Your Text To Change Accordingly :" mode={mode} showAlert={showAlert} />
            }>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
