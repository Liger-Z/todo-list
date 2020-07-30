// Module for rendering todos
import PubSub from '../node_modules/pubsub-js'

const todosRenderer = (() => {
  const _todosWrapper = document.querySelector('.todos-wrapper');
  let _todoArray;

  const _template = function(todo) {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    let todoTitleDiv = document.createElement('div');
    todoTitleDiv.classList.add('todo-title-div');

    let todoTitle = document.createElement('h1');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;
    todoTitleDiv.appendChild(todoTitle);

    let todoContentDiv = document.createElement('div');
    todoContentDiv.classList.add('todo-content-div');

    let todoDueDateDiv = document.createElement('div');
    todoDueDateDiv.classList.add('todo-due-date-div');
    let todoDueDate = document.createElement('p') 
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = todo.dueDate;
    todoDueDateDiv.appendChild(todoDueDate);

    let todoDescriptionDiv = document.createElement('div');
    todoDescriptionDiv.classList.add('todo-description-div');
    let todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-description');
    todoDescription.textContent = todo.description;
    todoDescriptionDiv.appendChild(todoDescription);

    let todoButtonsDiv = document.createElement('div');
    todoButtonsDiv.classList.add('todo-buttons-div');

    let todoProjectType = document.createElement('button');
    todoProjectType.classList.add('todo-project-type');
    todoProjectType.classList.add('todo-button');
    todoButtonsDiv.appendChild(todoProjectType);

    let removeTodo = document.createElement('button');
    removeTodo.classList.add('remove-todo');
    removeTodo.classList.add('todo-button');
    todoButtonsDiv.appendChild(removeTodo);

    todoDiv.appendChild(todoTitleDiv);
    todoContentDiv.appendChild(todoDueDateDiv);
    todoContentDiv.appendChild(todoDescriptionDiv);
    todoContentDiv.appendChild(todoButtonsDiv);
    todoDiv.appendChild(todoContentDiv);

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