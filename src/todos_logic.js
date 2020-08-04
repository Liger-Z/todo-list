/* todos.js will handle everything related to the 'todos' objects.
*/
import PubSub from '../node_modules/pubsub-js'
import { format, isDate } from '../node_modules/date-fns'

const todosModule = (() => {
  const _todos = (title, dueDate, dueTime, description, project, priority) => {
    /* Localstorage stores date objects as strings which means dueDate won't work if you
    use it as an argument in format(). Creating a timestamp first lets you get around that.
    */
    const dateStamp = dueDate.getTime();
    const displayDate = format(new Date(dateStamp), 'do LLL y') 
    const timeStamp = dueTime.getTime();
    const displayTime = format(new Date(timeStamp), 'p');
    const id = `${title}_${Math.random() * 100}`
    return { title, description, project, priority, displayDate, displayTime, id};
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
    localStorage.setItem('todoArray', JSON.stringify(_todoArray));
    PubSub.publish(TODO_ARRAY, _todoArray);
  })

  PubSub.subscribe('remove todo', function(msg, data) {
    for (let i=0; i < _todoArray.length; i++) {
      if (_todoArray[i].id === data) {
        _todoArray.splice(i, 1);
        break
      }
    }

    localStorage.setItem('todoArray', JSON.stringify(_todoArray));
  })

})();

export { todosModule }