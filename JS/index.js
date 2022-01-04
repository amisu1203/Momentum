const main = document.querySelector('.main');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    location.href = 'main.html';
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(username) {
    greeting.innerText = `hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    location.href = 'index.html';
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greeting
    if (window.location.pathname === '/index.html') {
        location.href = 'main.html';
    }
    paintGreeting(savedUsername);   
}


