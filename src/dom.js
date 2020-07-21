/* dom.js will handle everything to do with the DOM
*/
import PubSub from '../node_modules/pubsub-js'


const eventListeners = (() => {
  const menuButtonToggle = () => {
    const menuButton = document.querySelector('#menu-button');
    menuButton.addEventListener('click', menu.toggleMenu);
  }

  return {
    menuButtonToggle,
  };
})();

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

  const renderTodo = () => {

  }
  
  return {
    toggleMenu,
  };
})();

const menuButton = eventListeners.menuButtonToggle;

export { menuButton }