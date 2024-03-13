import './style.css';
import './utils/bling';

function app() {
  // state
  let state = {id: 0, todos: []}
  // ui
  let ui = {
    input: $('input'),
    form: $('form'),
  }
  console.log(ui)

  return mk('div', { id: 'app' }, [
    mk('h1', null, ['Todo App: AltSchool Frontend Version']),
    (ui.form = mk('form', { id: 'form' }, [
      (ui.input = mk('input', { className: 'todo' , type: 'text', id: 'todo', placeholder: 'Enter a todo' })),
      mk('button', { type: 'submit', onclick: add }, ['Add Todo']),
    ])),
    (ui.todos = mk('ul', { id: 'todos' }))
  ]);

  function createTodo(todo) {
    let item, text;

    item = mk('li', { className: 'todo-item' }, [
      (text = mk('span', {}, [todo.text]))
    ]);

    return item
  }

  function add(event) {
    event.preventDefault();

    const text = ui?.input.value;

    if (!text) return;

    const todo = { text, completed: false, id: Date.now() };
    console.log(todo)

    ui.input.value = '';


    state.todos.push(todo);
    console.log(state.todos)

    ui?.todos.prepend(createTodo(todo));
  }
}

function render() {
  document.body.prepend(app());
}

render();
