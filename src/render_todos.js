// Module for rendering todos
import PubSub from '../node_modules/pubsub-js'

const todosRenderer = (() => {
  const _todosWrapper = document.querySelector('.todos-wrapper');
  let _todoArray;

  const _template = function(todo) {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    let todoTitle = document.createElement('h1');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;

    let todoDueDate = document.createElement('p') 
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = todo.dueDate;

    let todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-description');
    todoDescription.textContent = todo.description;

    let todoProjectType = document.createElement('button');
    todoProjectType.classList.add('todo-project-type');

    let removeTodo = document.createElement('button');
    removeTodo.classList.add('remove-todo');

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDueDate);
    todoDiv.appendChild(todoDescription);
    todoDiv.appendChild(todoProjectType);
    todoDiv.appendChild(removeTodo);

    return todoDiv;
  }

  const _render = function(msg, data) {
    console.log(_todoArray)
    let todoDiv = _template(_todoArray[_todoArray.length -1]);
    _todosWrapper.appendChild(todoDiv);
  }

  const TODO_ARRAY = 'todo array';
  PubSub.subscribe(TODO_ARRAY, function(msg, data) {
    _todoArray = data;
    _render();
  });
})(); 

export { todosRenderer }