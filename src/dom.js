/* dom.js will handle everything to do with the DOM
*/
import PubSub from '../node_modules/pubsub-js'

const menu = (() => {
  const menuWrapper = document.querySelector('.menu-wrapper');
  
  const toggleMenu = () => {
    if (menuWrapper.classList.contains('inactive')) {
      menuWrapper.classList.add('active');
      menuWrapper.classList.remove('inactive');
    }else {
      menuWrapper.classList.add('inactive');
      menuWrapper.classList.remove('active');
    }
  }
  
  const menuButtonToggle = () => {
    const menuButton = document.querySelector('#menu-button');
    menuButton.addEventListener('click', toggleMenu);
  }

  return {
    menuButtonToggle,
  };
})();

const todos = (() => {
  const addTodo = () => {
    const addTodoButton = document.querySelector('#add-todo-button')
    addTodoButton.addEventListener('click', toggleForm)
  }

  const toggleForm = () => {
    const formWrapper = document.querySelector('.form-wrapper');
    if (formWrapper.classList.contains('inactive')) {
      formWrapper.classList.add('active');
      formWrapper.classList.remove('inactive');
    }else {
      formWrapper.classList.add('inactive');
      formWrapper.classList.remove('active');
    }
  }
  
  const addForm = () => {
    const formAddButton = document.querySelector('.form-add-button');
    formAddButton.addEventListener('click', formData);
  }

  const formData = () => {
    const inputData = document.querySelectorAll('.form-text-data');
    console.log(inputData)
  }

  return {
    addTodo,
    addForm,
  };
})();



const menuButton = menu.menuButtonToggle;
const addTodoButton = todos.addTodo;
const addFormButton = todos.addForm;

export { menuButton, addTodoButton, addFormButton }