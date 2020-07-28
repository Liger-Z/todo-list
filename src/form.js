import PubSub from '../node_modules/pubsub-js';
import { displayArray } from './todos_logic.js'

// Form for adding new todos
const form = (() => {
  const _openFormButton = document.querySelector('#add-todo-button');
  const _formWrapper = document.querySelector('.form-wrapper');
  const _formAddButton = document.querySelector('.form-add-button');
  const _formCancelButton = document.querySelector('.form-cancel-button');
  const _todoForm = document.querySelector('.todo-form');
  const _inputData = document.querySelectorAll('.form-text-data');
  const _priorityData = document.querySelectorAll('[name="priority"]');
  const _contentDiv = document.querySelector('#content');
  const _footer = document.querySelector('.site-footer');

  const openForm = function() {
    _openFormButton.addEventListener('click', _toggleForm)
  }

  const addForm = function() {
    _formAddButton.addEventListener('click', _closeForm);
  }

  const cancelForm = function() {
    _formCancelButton.addEventListener('click', () => {_closeForm(null, true)});
  }

  const _toggleForm = function() {
    _formWrapper.classList.add('active');
    _formWrapper.classList.remove('inactive');
    _contentDiv.classList.add('blur');
    _footer.classList.add('footer-blur');
  }
  
  /* unconditional parameter is for the close form button, so that it closes even
  if the input fields are empty
  */
 const _closeForm = function(e, unconditional=false) {
    let notFilled = false;
    let notChecked = true;

    _inputData.forEach((element) => {
      if (element.value === "") {
        notFilled = true;
      }
    })
    
    _priorityData.forEach((element) => {
      if (element.checked === true) {
        notChecked = false;
      }
    })

    if (unconditional === false && notFilled === true | notChecked === true) {
      return null; // form won't close under these conditions
    }else {
      _formData();
      displayArray();
      _todoForm.reset();
      _formWrapper.classList.add('inactive');
      _formWrapper.classList.remove('active');
      _contentDiv.classList.remove('blur');
      _footer.classList.remove('footer-blur');
    }
  }
  
  // obtain data from form to be used in making todos
  const _formData = function() {
    let data = [];
 
    _inputData.forEach((element) => {
      data.push(element.value);
    })
 
    _priorityData.forEach((element) => {
      if (element.checked === true) {
        data.push(element.value);
      }
    })
    
    const FORM_DATA = 'form data'
    PubSub.publish(FORM_DATA, data);
  }

  return {
    openForm,
    addForm,
    cancelForm,
  };
})();

const openFormButton = form.openForm;
const addFormButton = form.addForm;
const cancelFormButton = form.cancelForm;

export { openFormButton, addFormButton, cancelFormButton }