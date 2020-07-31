/* todos.js will handle everything related to the 'todos' objects.
*/
import PubSub from '../node_modules/pubsub-js'
import { format } from '../node_modules/date-fns'

const todosModule = (() => {
  const _todos = (title, dueDate, dueTime, description, project, priority) => {
    const formatDate = () => {return format(dueDate, 'do LLL y')}
    const formatTime = () => {return format(dueTime, 'p')}
    
    return { title, dueDate, dueTime, description, project, priority, formatDate, formatTime};
  };

  let _todoArray;

  if (!localStorage.getItem('todoArray')) {
    _todoArray = [];
  }else {
    _todoArray = JSON.parse(localStorage.getItem('todoArray'));
    PubSub.subscribe('dom loaded', () => {
      PubSub.publish('dom loaded array', _todoArray);
    })
  }
  
  const FORM_DATA = 'form data';
  const TODO_ARRAY = 'todo array';

  PubSub.subscribe(FORM_DATA, function(msg, data) {
    let todo = _todos(data[0], data[1], data[2], data[3], data[4], data[5])
    _todoArray.push(todo);
    todo.formatDate();
    localStorage.setItem('todoArray', JSON.stringify(_todoArray));
    PubSub.publish(TODO_ARRAY, _todoArray);
  })

  const displayArray = () => {console.log(_todoArray)}

  return {
   displayArray,
  }
})();

const displayArray = todosModule.displayArray
export { displayArray }