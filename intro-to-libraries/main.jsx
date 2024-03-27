import './style.css';

// console.log($('#app'));

// console.log(React);
// console.log(ReactDOM);

// $('#app')[0].innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
// React.createElement('p', null, 'Hello World')

function SmallerComponent(props) {
  return (
    <p id={props.id} className={props.className} style={props.style}>
      {props.children}
    </p>
  );
}

const Hello = (props) => {
  const stateSetter = React.useState(0);
  const [count, setCount] = stateSetter;
  const handClick = () => console.log(setCount(count + 1));
  // console.log(props);
  const { className, id, greetings, name, style } = props;
  // console.log({ className, id, greetings, name });

  return (
    <>
      {SmallerComponent({ id, className, style: { ...style, color: 'green' }, children: 'Hello'})}
      <SmallerComponent id={id} className={className} style={{...style, color: 'white'}}>
        <span>Hello</span>
      </SmallerComponent>
      <p id={id} className={className} style={style}>
        Hello <br /> Good {greetings}
      </p>
      <button onClick={handClick}>{count}</button>
    </>
  );
};

// Hello({ greetings: 'morning', name: 'ojo' });

// const div2 = () => <p>Hello AltSchool</p>

// console.log(<Hello greetings='morning' name='ojo' id='id' className="dangerous" />);

const toBeRendered = <Hello
    greetings="morning"
    name="ojo"
    id="id"
    className="dangerous"
    style={{ color: 'red', border: '1px solid ', padding: '5px' }}
  />

console.log(toBeRendered);

ReactDOM.render(
  toBeRendered,
  document.getElementById('app'),
);
