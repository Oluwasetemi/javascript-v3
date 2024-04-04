import confetti from 'canvas-confetti';
import React from 'react';
import './App.css';
import { List } from './components/List';
// import audio
import pack from '../package.json';
console.log(pack.dependencies);

// AudioElement = new Audio('audio.mp3');
// AudioElement.play();

function App() {
  const [hide, setHide] = React.useState(false);
  const date = new Date();
  const hour = date.getHours();

  const data = [
    'React',
    'JSX',
    'Components',
    // 'Props',
    'State',
    'Hooks',
    'Context',
    'Redux',
  ];

  // console.log(date.getHours());

  const greeting = 'Good Morning!';

  function addConfetti(event) {
    // console.log(event)
    confetti({
      particleCount: 5,
      origin: {
        x: event.pageX / window.innerWidth,
        y: event.pageY / window.innerHeight,
      },
      decay: 0.8,
    });
  }

  if (hour > 15) {
    return (
      <div onMouseMove={addConfetti}>
        <h1>Good Day, Hello World</h1>
        {!hide && <p>This is a React App</p>}
        <button
          onClick={() => {
            setHide(!hide);
            // AudioElement.play();
          }}
        >
          Change Begins With Me(Practicing what the instructor teaches in class)
        </button>
      </div>
    );
  }

  return (
    <div onMouseMove={addConfetti}>
      <h1>{greeting === 'Good Morning!' ? 'Morning' : null}, Hello World</h1>
      <p>This is a React App</p>
      <ul>
        {data.map((item) => (
          <List item={item} key={crypto.randomUUID()} />
        ))}
      </ul>

      <h2>List of Dependencies used in this Project</h2>

      <ol>
        {Object.entries(pack?.dependencies).map((item) => (
          <li key={crypto.randomUUID()}>{item[0] + `${':'.repeat(30)}` + item[1]}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
