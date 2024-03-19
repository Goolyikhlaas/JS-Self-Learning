//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listeners

todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){
    //prevent form from submiting
    event.preventDefault();
    //Todo Div
    const todoDive = document.createElement('div');
    todoDive.classList.add('todo');
    //create li
    const newtodo = document.createElement('li');
    newtodo.innertext = 'hey';
    newtodo.classList.add('todo-item');
    todoDive.appendChild(newtodo);
    //checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completedButton");
    todoDive.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-check"></i>';
    trashButton.classList.add("completedButton");
    todoDive.appendChild(trashButton);
    



}