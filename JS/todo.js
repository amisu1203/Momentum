const todoForm = document.getElementById('todo-form');
const todoInp = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    // newTodo(섬밋단계에서 오브젝트를 줌)의 프로퍼티인 'id'에 접근해서 그 값을 받아서 li의 id에 부여함
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const btn = document.createElement('button');
    btn.innerText = '❌';
    btn.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function submitTodo(event) {
    event.preventDefault();
    const newTodo = todoInp.value;
    todoInp.value = '';
    const newTodoObj = {
        'text' : newTodo,
        'id' : Date.now()
    }

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}
todoForm.addEventListener('submit', submitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    // toDos가 빈 배열로 시작하는데, 만약 저장된 투투가 있다면 빈배열에 저장된 투투값을 넣어줌.
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}