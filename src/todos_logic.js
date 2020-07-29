/* todos.js will handle everything related to the 'todos' objects.
*/
import PubSub from '../node_modules/pubsub-js'

const todosModule = (() => {
  const _todos = (title, dueDate, description, priority) => {
  
    return { title, dueDate, description, priority };
  };

  let _todoArray = [];
  const FORM_DATA = 'form data';
  const TODO_ARRAY = 'todo array';

  PubSub.subscribe(FORM_DATA, function(msg, data) {
    let todo = _todos(data[0], data[1], data[2], data[3])
    _todoArray.push(todo);
    PubSub.publish(TODO_ARRAY, _todoArray);
  })

  const displayArray = () => {console.log(_todoArray)}

  return {
   displayArray,
  }
})();

const displayArray = todosModule.displayArray
export { displayArray }