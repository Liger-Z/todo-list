/* dom.js will handle everything to do with the DOM
*/
import PubSub from '../node_modules/pubsub-js';

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

const menuButton = menu.menuButtonToggle;

export { menuButton, }