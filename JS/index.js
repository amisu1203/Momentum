const main = document.querySelector('.main');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const user = document.querySelector('.bag span');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    location.href = 'main.html';
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(username) {
    const userNameUpper = username.toUpperCase();
    greeting.innerText = `hello ${userNameUpper}`;
    user.innerText = `${userNameUpper}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greeting
    if (window.location.pathname === '/index.html') {
        location.href = 'main.html';
    } else {
        paintGreeting(savedUsername); 
    }  
}


