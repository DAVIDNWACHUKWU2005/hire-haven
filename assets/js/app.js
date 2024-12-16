'use strict';

// Helper functions for DOM selection
function select(selector, scope = document) {
  return scope.querySelector(selector);
}

const loginForm = select('form');
const usernameInput = select('input[placeholder="email or phone"]');
const passwordInput = select('input[placeholder="password"]');

// Set default credentials in localStorage
localStorage.setItem('username', 'davidike444@gmail.com');
localStorage.setItem('password', '123456');


function validateLogin(event) {
  event.preventDefault(); 

  // Get user input
  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    window.location.href = 'home.html'; 
  } else {
   
    const errorMsg = select('.wrong-password');
    errorMsg.classList.remove('hidden'); 
  }
}


loginForm.addEventListener('submit', validateLogin);
