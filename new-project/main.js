import {
  setupCounter
} from './counter.js';
import javascriptLogo from './javascript.svg';
import './style.css';
import '/bling.js';
import viteLogo from '/vite.svg';

// console.log($$('div'))



$('#app').innerHTML = `
  <div name="counter-div" onclick="console.log('div.counter')">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 onclick="learnToPickYourFight()" >Hello Vite!</h1>
    <form>
      <input data-testid="Name" type="text" name="name" id="name" onchange="console.log(this)" />
    </form>
    <div class="card" my="danger" onclick="console.log('div.card')">
      <button id="counter" type="button"></button>

      <p>1</p><br/>
      <p>2</p><br/>
      <p>3</p><br/>
      <p>4</p><br/>
      <p>5</p><br/>
      <p>6</p><br/>
      <p>7</p><br/>
      <p>8</p><br/>
      <p>9</p><br/>
      <p>10</p><br/>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
  </div>
`;

setupCounter($('#counter'));

// childNodes - firstChild - lastChild - nextSibling - previousSibling
// children - firstElementChild - lastElementChild - nextElementSibling - previousElementSibling

// parentNode - hasChildNodes - appendChild - removeChild - replaceChild
// parentElement

const table = $('table')
const row = table.rows
// console.log(row)
// console.log(row[0])

// search getElement*, querySelector*, getElementsBy*(TagName, ClassName, Name) return a live collection

// difference
let buttonApp = app.querySelector('button')
// console.log('app button', buttonApp)

// const app = document.getElementById('app')
// let app = 5
// console.log(app)
// querySelectorAll('css selectors') - returns a NodeList
// querySelector('css selectors') - returns the first element that matches the selector


// what is the difference between a NodeList and an HTMLCollection?

// matches - element.matches('css selector') - returns a boolean
const counter = $('#counter')
// console.log(counter.matches('button'))

// closest - element.closest('css selector') - returns the first ancestor of the current element (or the current element itself) which matches the selector
counter.closest('div').style.backgroundColor = 'red'

// Node Properties(nodeValue, nodeName, nodeType, tagName) CharacterData  , Attributes and Properties, Modifying the document, Styles and Classes

let content = document.body.firstChild.nextSibling.data
// console.log(content)

// attribute (CCRUD)

// classes
// classList() add, toggle, remove DOMTokenList, className, attribute(CCRUD)

// styles
// element.style = 'color: red;'
// element.setAttribute('style', 'color: red;')

// NOT Possible except you declare it first in the html and update it later
// $('.card').my = 'my value'

// dataset
// data-* Attributes
// console.log($('input').dataset) // DOMStringMap { testid: "Name" }
// console.log($('input').dataset.testid)



// document.createElement('element', options{is?}) - creates a new element
const newDiv = document.createElement('div')
newDiv.on('click', () => {
  // console.log('click')
  newDiv.remove()
})

// attribute
// class
// style

// textContent, innerHTML
newDiv.textContent = 'Modifying the DOM'

// event

// insertion method - append, prepend, before, after (before, prepend), replaceWith
// newDiv
// allow us to insert (text, element, comment)
// div.before(newDiv) - previousSibling
// app.before(newDiv)
// div.prepend(newDiv) - firstChild
// app.prepend(newDiv)
// div.append (newDiv) - lastChild
// app.append (newDiv)
// app.after(newDiv) - nextSibling
app.after(newDiv)

// insertAdjacentHTML/Text/Element(position, element)
// position - beforebegin, afterbegin, beforeend, afterend

app.insertAdjacentHTML('beforebegin', newDiv.outerHTML)
app.insertAdjacentElement('beforebegin', newDiv)
// app.insertAdjacentHTML('afterbegin', '<div>afterbegin</div>')
// app.insertAdjacentHTML('beforeend', '<div>beforeend</div>')
// app.insertAdjacentHTML('afterend', '<div>afterend</div>')


// remove()
// element.remove()

// cloneNode

// DocumentFragment
const ul = document.createElement('ul')

function getListContent() {
  const fragment = new DocumentFragment()

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.textContent = `list item ${i}`
    fragment.append(li)
  }

  return fragment
}

// ul.innerHTML = getListContent()
ul.append(getListContent())

app.append(ul)

// client, offset, scroll
// clientWidth, clientHeight, clientTop, clientLeft
// offsetWidth, offsetHeight, offsetTop, offsetLeft, offsetParent(nearest positioned ancestor)
// scrollTop, scrollLeft, scrollWidth, scrollHeight

// console.log(getComputedStyle($('.card')))
// console.dir($('.card'))

// functions/method manipulate scroll programmatically using javascript

// events
// different events that we have - mouse(click, dbclick, contextmenu), keyboard(keydown, keyup), form(submit, change, input, focus), document(DOMContentLoaded, loaded), window(loaded), css(transitionend), custom

// event handler
// 1. html attribute - <button onclick="handleClick()">Click me</button>
// 2. dom property - button.onclick = handleClick
// 3. addEventListener - button.addEventListener('click', handleClick)

// event object
// bubbling, capturing, delegation,
// from event.target -> the last parent

// form (submit)
table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  // action
  highlight(target); // highlight it
};

function highlight(node) {
  node.style.backgroundColor = 'yellow';
}

$('form').on('submit', (event) => {
  event.preventDefault()

  console.log(event)
  console.log(event.target.name.value)
  console.log('form submitted')
})

// creating a custom event
// dispatch it




let newForm = mk('form', null, [
  mk('label', { for: 'name' }, ['Name']),
  mk('input', { type: 'text', name: 'name', id: 'name'}),
  mk('button', { type: 'submit' }, ['Submit'])
])


console.log(newForm)
app.append(newForm)