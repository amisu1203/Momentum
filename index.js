const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
// 중요한 정보가 아닌 string만 담을 변수는 대문자로 표시한다.
// 반복해서 사용할 string
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    // 로컬스토리지에 username이라는 키로 userName의 값을 저장
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    // 현재 form, h1 모두 hidden 상태
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greeting
    paintGreeting(savedUsername);   
}

