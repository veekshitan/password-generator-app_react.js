import React from 'react'
import './App.css';
import generate_pass from './generator_fnc';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const[password, setPassword] = React.useState(' ')
  const[passwordlen, setPasswordlen] = React.useState(15)
  const[upperCase, setUpperCase] = React.useState(false)
  const[lowerCase, setLowerCase] = React.useState(false)
  const[includenum, setIncludeNum] = React.useState(false)
  const[includesymb, setIncludeSymb] = React.useState(false)

  const generate_password = (e) => {
    setPassword(generate_pass(passwordlen, upperCase, lowerCase, includenum, includesymb))
  }

  const notify = () => {
    toast('Copied', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const copyFnc = (e) => {
    copy(password)
    notify()
  }

  

  return(
    <div className = "app">

      {/* title of the app*/}
      <div className = "main_title">Password generator</div>

      {/* The form for generating password (including display)*/ }

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

      <div className = "gen_form">

          {/* The top display space along with copy paste button*/ }

          <div className = "display_and_copy_button">

            {/* The display space*/ }
            <div className = "display">{password}</div>

            {/* copy paste button*/ }
            <button className = "paste_btn" onClick = {copyFnc }><i class="fa-solid fa-paste"></i></button>
          </div>
            
            {/* Filter form*/ }

            <div className = "filter_form">
            <div>

              {/* Length of the password */}
              <div className = "filter_elements">
                <label className = "pass_len">Password Length
                  <input 
                    defaultValue={passwordlen}
                    onChange = {(events) => setPasswordlen(events.target.value)}
                    type="number" 
                    max = "80" 
                    min = "10"
                  />
                </label>
              </div>

              {/* Uppercase letters */}
              <div className = "filter_elements">
                <label>Include Uppercase Letters
                  <input 
                    checked = {upperCase}
                    onChange = {(e) => setUpperCase(e.target.checked)}
                    type= "checkbox" />
                </label>

              </div>
              
              {/* Lowercase letters */}
              <div className = "filter_elements">
                <label>Include LowerCase Letters
                  <input 
                    type= "checkbox" 
                    onChange = {(e) => setLowerCase(e.target.checked)}
                    checked = {lowerCase}
                    />
        
                </label>
              </div>
              
              {/* Include numbers */}
              <div className = "filter_elements">
                <label>Include Numbers
                  <input 
                    type= "checkbox" 
                    defaultChecked = {includenum}
                    onChange = {(e) => setIncludeNum(e.target.value)}
                  />
                </label>
              </div>
              
              {/* Include Symbols */}
              <div className = "filter_elements">
                <label>Include Symbols
                  <input 
                    type= "checkbox" 
                    defaultChecked = {includesymb}
                    onChange = {(e) => setIncludeSymb(e.target.value)}/>
                </label>
              </div>
              
              {/* Generate button */}
              <div className = "filter_elements">
                <button className = "generate_btn" onClick={generate_password}>Generate Password</button>
              </div>

            </div>

          </div>
      </div>
      
    </div>
    
  );

}


