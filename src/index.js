import PubSub from '../node_modules/pubsub-js'
import { menuButton, } from './menu.js'
import { openFormButton, addFormButton, cancelFormButton } from './form.js'
import { todosRenderer } from './render_todos'


menuButton();
openFormButton();
addFormButton();
cancelFormButton();
document.addEventListener('DOMContentLoaded', () => {
  PubSub.publish('dom loaded', 'dom loaded');
})