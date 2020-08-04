// Module for rendering todos
import PubSub from '../node_modules/pubsub-js'

const todosRenderer = (() => {
  const _todosWrapper = document.querySelector('.todos-wrapper');
  let _todoArray;

  const _template = function(todo) {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');
    todoDiv.id = todo.id;

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
    let todoDueDate = document.createElement('p'); 
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = todo.displayDate;
    todoDueDateDiv.appendChild(todoDueDate);
    let todoDueTime = document.createElement('p');
    todoDueTime.classList.add('todo-due-time');
    todoDueTime.textContent= todo.displayTime;
    todoDueDateDiv.appendChild(todoDueTime);

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

    let removeTodoButton = document.createElement('button');
    removeTodoButton.classList.add('remove-todo');
    removeTodoButton.classList.add('todo-button');
    removeTodoButton.addEventListener('click', removeTodo)
    todoButtonsDiv.appendChild(removeTodoButton);

    todoDiv.appendChild(todoTitleDiv);
    todoContentDiv.appendChild(todoDueDateDiv);
    todoContentDiv.appendChild(todoDescriptionDiv);
    todoContentDiv.appendChild(todoButtonsDiv);
    todoDiv.appendChild(todoContentDiv);

    return todoDiv;
  }

  const _render = function(msg, data) {
    let todoDiv = _template(_todoArray[_todoArray.length -1]);
    _todosWrapper.appendChild(todoDiv);
  }

  const _renderAll = function(project=null) {
    let render = todo => {
      let todoDiv = _template(todo);
      _todosWrapper.appendChild(todoDiv);
    }

    if (project === null) {
      _todoArray.forEach(todo => {render(todo)})
    }else{
      _todoArray.forEach(todo => {
        if (todo.project === project) {render(todo)}
      })
    }
  }

  const removeTodo = function() {
    const todoDiv = this.parentNode.parentNode.parentNode;
    console.log(todoDiv);
    PubSub.publish('remove todo', todoDiv.id);
    todoDiv.remove();

  }

  const TODO_ARRAY = 'todo array';
  PubSub.subscribe(TODO_ARRAY, function(msg, data) {
    _todoArray = data;
    _render();
  });

  const CHANGE_TAB = 'change tab';
  PubSub.subscribe(CHANGE_TAB, function(msg, data) {
    _renderAll(data);
  })


  PubSub.subscribe('dom loaded array', (msg, data) => {
    _todoArray = data;
    _renderAll()
  });
})(); 

export { todosRenderer }