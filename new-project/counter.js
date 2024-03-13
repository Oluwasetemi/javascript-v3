export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  // console.log(element.on)

  const handler = (event) => {
    // event.stopPropagation()
    console.log(event) // event object
    console.log(event.target) // element
    setCounter(counter + 1)
  }

  // element.on('click', handler, { once: true })

  element.addEventListener('click', handler, { once: true})
  setCounter(0)
}
