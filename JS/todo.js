const todoForm = document.getElementById('todo-form');
const todoInp = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInp.value;
    todoInp.value = '';
}
todoForm.addEventListener('submit', todoSubmit);
