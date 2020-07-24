/* dom.js will handle everything to do with the DOM
*/
import PubSub from '../node_modules/pubsub-js'
// Menu for swapping between project types
const menu = (() => {
  const menuWrapper = document.querySelector('.menu-wrapper');
  
  const _toggleMenu = () => {
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
    menuButton.addEventListener('click', _toggleMenu);
  }

  return {
    menuButtonToggle,
  };
})();

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

  const openForm = () => {
    _openFormButton.addEventListener('click', _toggleForm)
  }

  const addForm = () => {
    _formAddButton.addEventListener('click', _formData);
    _formAddButton.addEventListener('click', _closeForm);
  }

  const cancelForm = () => {
    _formCancelButton.addEventListener('click', () => {_closeForm(null, true)});
  }

  const _toggleForm = () => {
    _formWrapper.classList.add('active');
    _formWrapper.classList.remove('inactive');
    _contentDiv.classList.add('blur');
    _footer.classList.add('footer-blur');
  }
  
  // obtain data from form to be used in making todos
  const _formData = () => {
    let data = [];

    _inputData.forEach((element) => {
      data.push(element.value);
    })

    _priorityData.forEach((element) => {
      if (element.checked === true) {
        data.push(element.value);
      }
    })

    return data;
  }

  /* unconditional parameter is for the close form button, so that it closes even
  if the input fields are empty
  */
  const _closeForm = (e, unconditional=false) => {
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
      _todoForm.reset();
      _formWrapper.classList.add('inactive');
      _formWrapper.classList.remove('active');
      _contentDiv.classList.remove('blur');
      _footer.classList.remove('footer-blur');
    }
  }

  return {
    openForm,
    addForm,
    cancelForm,
  };
})();


const menuButton = menu.menuButtonToggle;
const openFormButton = form.openForm;
const addFormButton = form.addForm;
const cancelFormButton = form.cancelForm;

export { menuButton, openFormButton, addFormButton, cancelFormButton }