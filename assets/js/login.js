"use strict";
import { select, listen } from './utils.js';  

const loginForm = select('form');
const usernameInput = select('input[placeholder="email or phone"]');
const passwordInput = select('input[placeholder="password"]');
localStorage.setItem('username', 'davidike444@gmail.com');
localStorage.setItem('password', '123456');
const errorMsg = select('.wrong-password'); 


function validateLogin(event) {
  event.preventDefault(); 

  const enteredUsername = usernameInput ? usernameInput.value.trim() : ''; // Get input values
  const enteredPassword = passwordInput ? passwordInput.value.trim() : '';

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    window.location.href = 'home.html';
  } else {
      errorMsg.classList.remove('hidden'); 
    }
  
}

listen(loginForm, 'submit', validateLogin);
