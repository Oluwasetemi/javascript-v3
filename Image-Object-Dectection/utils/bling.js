/**
 * https://gist.github.com/paulirish/12fb951a8b893a454b32
 */

/* bling.js */

window.$$ = document.querySelectorAll.bind(document);

window.$ = document.querySelector.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

// prototype(destiny) || __proto__ [[Prototype]] (source|DNA)

// setPrototypeOf and getPrototypeOf

NodeList.prototype.__proto__ = Array.prototype;

//TODO: fix the addEventListener accepting the third parameter
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn, options) {
  this.forEach(function (elem, i) {
    elem.on(name, fn, options);

  });
}

function mk(type, props, children) {
  const el = document.createElement(type);
  if (props) Object.assign(el, props);
  if (children) el.prepend(...children);
  return el;
}

window.mk = mk;