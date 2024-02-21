import {
  setupCounter
} from './counter.js';
import javascriptLogo from './javascript.svg';
import './style.css';
import '/bling.js';
import viteLogo from '/vite.svg';

$('#app').innerHTML = `
  <div name="counter-div">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
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
console.log(row)
console.log(row[0])

// search getElement*, querySelector*, getElementsBy*(TagName, ClassName, Name) return a live collection

// difference
let buttonApp = app.querySelector('button')
console.log('app button', buttonApp)

// const app = document.getElementById('app')
// let app = 5
console.log(app)
// querySelectorAll('css selectors') - returns a NodeList
// querySelector('css selectors') - returns the first element that matches the selector


// what is the difference between a NodeList and an HTMLCollection?

// matches - element.matches('css selector') - returns a boolean
const counter = $('#counter')
console.log(counter.matches('button'))

// closest - element.closest('css selector') - returns the first ancestor of the current element (or the current element itself) which matches the selector
counter.closest('div').style.backgroundColor = 'red'
