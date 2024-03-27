import './style.css';
import './utils/bling';

function app() {
  // state
  let state = { id: 0, todos: [] };
  // ui
  let ui = {
    input: $('input'),
    form: $('form'),
  };
  // console.log(ui)

  return mk('div', { id: 'app' }, [
    mk('h1', null, ['Todo App: AltSchool Frontend Version']),
    (ui.form = mk('form', { id: 'form' }, [
      (ui.input = mk('input', {
        className: 'todo',
        type: 'text',
        id: 'todo',
        placeholder: 'Enter a todo',
      })),
      (ui.add = mk('button', { type: 'submit', onclick: add }, ['Add Todo'])),
    ])),
    (ui.todos = mk('ul', { id: 'todos' })),
  ]);

  function createTodo(todo) {
    let item, text, x;

    function remove() {
      // debugger;
      state.todos = state.todos.filter((eachTodo) => eachTodo.id !== todo.id);

      item.remove();
    }

    function edit() {
      // debugger;
      // event to submit and escape(blur) out of the input
      function onkeydown(event) {
        switch (event.key) {
          case 'Enter': {
          console.log(event.key)
            text.textContent = todo.text = editInput.value;
            // editInput.replaceWith(text);
            // break;
          }
          case 'Escape': {
            editInput.blur();
            // break;
          }
        }
      }

      // cancel the edit function
      const cancel = () => {
        (x.disabled = editInput.replaceWith(text))
        // reset styles
        x.style = 'cursor: pointer;pointer-events: auto;';
      };

      // create the input using mk()
      let editInput = mk('input', {
        style: 'flex: 1;',
        onkeydown,
        value: todo.text,
        onblur: cancel,
      });

      // replace the li with the input
      text.replaceWith(editInput);

      // focus on the input
      editInput.focus();

      // make sure no user can click delete during the process
      x.disabled = true;
      x.style = 'cursor: not-allowed;pointer-events: none;';
    }

    item = mk('li', { className: 'todo-item', style: 'display: flex;place-items: center;padding-bottom: 4px;' }, [
      (text = mk('span', { style: 'flex: 1;', ondblclick: edit }, [todo.text])),
      (x = mk('button', { onclick: remove }, ['X'])),
    ]);

    return item;
  }

  function add(event) {
    event.preventDefault();

    const text = ui?.input.value;

    if (!text) return;

    ui.input.value = '';
    const todo = { text, completed: false, id: Date.now() };
    // console.log(todo)


    state.todos.push(todo);
    // console.log(state.todos)

    ui?.todos.prepend(createTodo(todo));
  }
}

function render() {
  document.body.prepend(app());
}

render();

// programmatically test out App
function testTodoApp(root) {
  // get the current app container
  const app = [].find.call(root.children, (child) => child.id === 'app');

  // get the form, input, add
  const form = app.querySelector('form');
  // const form = app.firstElementChild;
  const input = form.firstElementChild;
  const add = form.lastElementChild;






  // create a loop to create 1000 todos
  for (let eachTodo = 0; eachTodo < 1000; eachTodo++) {
    // create input.value
    input.value = `Todo ${eachTodo}`;
    // trigger the change and click event
    input.dispatchEvent(new Event('change'));
    add.dispatchEvent(new Event('click'));
  }

  // get all the lis
  const allTodos = [].slice.call(app.lastElementChild.children);

  // delete all the todos with another loop
  for (let eachTodo = 0; eachTodo < 1000; eachTodo++) {
    // get the todo
    const todo = allTodos[eachTodo];

    // update the todo text
    todo.firstElementChild.dispatchEvent(new Event('dblclick'));

    todo.firstElementChild.value += `updated`;

    todo.firstElementChild.dispatchEvent(
      Object.assign(new Event('keydown'), { key: 'Enter' })
    )
    // !/updated/.test(kids[i].firstElementChild.textContent)
    console.log(todo.firstElementChild.textContent)
    if (!/updated/.test(todo.firstElementChild.textContent)) {
      throw new Error('Todo was not updated');
    }
  }

  // delete all the todos with another loop
  for (let eachTodo = 0; eachTodo < 1000; eachTodo++) {
    // get the todo
    const todo = allTodos[eachTodo];

    // delete the todo
    todo.lastElementChild.dispatchEvent(new Event('click'));
  }

}

let time;
document.body.prepend(
  mk('div', {
    style: 'position: fixed; bottom: 0; left: 0; background: #333; color: #fff; padding: 1rem; display: flex; place-items: center;gap: 4px;'
  }, [
    mk('button', {
      onclick() {
        const start = performance.now()
        testTodoApp(document.body)
        const end = performance.now()
        time.textContent = `${end - start}ms`
      }
    }, ['Run Tests']),
    (time = mk('time', {}, ['0ms']))
  ])
);
