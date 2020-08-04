import PubSub from '../node_modules/pubsub-js'
import { menuButton, } from './menu.js'
import { openFormButton, addFormButton, cancelFormButton } from './form.js'
import { todosRenderer } from './render_todos'
import { todos_logic } from './todos_logic'


menuButton();
openFormButton();
addFormButton();
cancelFormButton();
document.addEventListener('DOMContentLoaded', () => {
  PubSub.publish('dom loaded', 'dom loaded');
})