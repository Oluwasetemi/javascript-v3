export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  // console.log(element.on)
  element.on('click', () => setCounter(counter + 1))
  setCounter(0)
}
