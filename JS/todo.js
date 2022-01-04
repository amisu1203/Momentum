const todoForm = document.getElementById('todo-form');
const todoInp = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const btn = document.createElement('button');
    btn.innerText = '❌';

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function submitTodo(event) {
    event.preventDefault();
    const newTodo = todoInp.value;
    todoInp.value = '';
    paintTodo(newTodo);
}
todoForm.addEventListener('submit', submitTodo);
