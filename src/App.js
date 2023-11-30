import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [BtnText, setBtnText] = useState('Enable Dark Mode');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setBtnText('Disable Dark Mode')
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success")
      //document.title = 'TextUtils - Home | Dark Mode';
      // setInterval(() =>{
      //   document.title = 'Textutils is amazing!'
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now'
      // }, 1500);
    }
    else{
      setMode('light');
      setBtnText('Enable Dark Mode')
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success")
      //document.title = 'TextUtils - Home';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} BtnText={BtnText}/>
      <Alert alert={alert} />
      <div className="container">
        <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}>
            </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
