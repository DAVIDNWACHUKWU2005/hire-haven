'use strict';
import { select, selectAll, listen, create, selectElement } from './utils.js';




const loginForm = select('form');
const usernameInput = select('input[placeholder="email or phone"]');
const passwordInput = select('input[placeholder="password"]');



localStorage.setItem('username', 'davidike444@gmail.com'); 
localStorage.setItem('password', '1234578');           

loginForm.listen('submit', function (e) {
    e.preventDefault(); 

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

 
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
       
        window.location.href = 'home.html';
    } else {
        console.log('Incorrect username or password.');
    }
});
