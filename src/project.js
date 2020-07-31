// Handles logic to do with projects

import PubSub from '../node_modules/pubsub-js'

const project = (() => {
  const _todosWrapper = document.querySelector('.todos-wrapper');
  const _allTodos = document.querySelector('.all-todos');
  const _todayTodos = document.querySelector('.today-todos');
  const _tomorrowTodos = document.querySelector('.tomorrow-todos');
  const _projectsTab = document.querySelector('.projects-wrapper');

  _allTodos.addEventListener('click', () => {changeTab()});
  _todayTodos.addEventListener('click', () => {changeTab('today')});
  _tomorrowTodos.addEventListener('click', () => {changeTab('tomorrow')});

  const changeTab = function(tab) {
      _todosWrapper.innerHTML = '';
      const CHANGE_TAB = 'change tab';
      PubSub.publish(CHANGE_TAB, tab);
  }
})();