# class Note - 9th September 2023

## Event Handlers

```jsx
// 🚫 Invalid: calls the function without 'dark'
<button onClick={setTheme}>Toggle theme</button>
```

```jsx
// 🚫 Invalid: calls the function right away
<button onClick={setTheme('dark')}>Toggle theme</button>
```

```JSX
// ✅ Valid:
<button onClick={() => setTheme('dark')}>
  Toggle theme
</button>
```

> NB - We're creating a brand-new anonymous arrow function, `() => setTheme('dark')`, and passing it to React. When the user clicks the button, the function will run, and the code inside the function is executed (setTheme('dark')).

Do you understand the bind, call and apply in JavaScript?

```jsx
// ✅ Valid:
<button onClick={setTheme.bind(null, 'dark')}>Toggle theme</button>
```

## The useState Hook

- Naming convention and destructuring
- Initial or default value(a value or a function that resolves to a value)

```jsx
const [count, setCount] = React.useState(0);

const [count, setCount] = React.useState(() => {
  return window.localStorage.getItem('saved-count');
});
```

- Core React Loop
- Rendering vs. Painting (When React does change a part of the DOM, the browser will need to re-paint. A re-paint is when the pixels on the screen are re-drawn because a part of the DOM was mutated. This is done natively by the browser when the DOM is edited with JavaScript (whether by React, Angular, jQuery, vanilla JS, anything).)
- Asynchronous Updates

## Forms

- Data Binding
- OnClick
- Form Controls

## Props Vs. State

“Props” is short for “properties”. At a micro level, they're like the attributes we place on HTML elements, like class or href.

Examine the Button Component Code:

```jsx
// App.jsx
<div className="actions">
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Confirm</Button>
</div>;

// Button.jsx
import React from 'react';

import styles from './Button.module.css';

function Button({ variant, children, isEnabled }) {
  return (
    <button className={`${styles.wrapper} ${styles[variant]}`} disabled={!isEnabled}>
      {children}
    </button>
  );
}

export default Button;
```

```css
/* Button.module.css */
.wrapper {
  padding: 8px 16px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;
  border: none;
  transition: background-color 200ms, color 200ms;
  cursor: pointer;
}

.primary {
  background-color: hsl(245deg 100% 60%);
  color: white;
}

.secondary {
  background-color: transparent;
  color: hsl(15deg 10% 30%);
}

.primary:hover {
  background-color: hsl(245deg 75% 50%);
}

.secondary:hover {
  background-color: hsl(15deg 60% 90% / 0.5);
  color: black;
}
```

Props allow us to customize the behaviour of a given component, so that the exact same component can do different things in different scenarios.

Props are the inputs to our components, like arguments passed to a function.

## Complex state

Working Arrays, Objects as the default state will require us to understand the concept of Mutation.

### For Arrays

1. Create a new array
2. Modify that new array
3. Set the new array into state

### For Objects

Same approach works of the Object, with spread or Object.assign, modify and set me object into state.

Using the Prev state value is the Dispatch setState action is another important option when dealing with complex state.

## Lifting State Up

## The useId Hook

## Rules of Hooks

## Immutability

## Refs

## Side Effects

## Custom Hooks

## Data Fetching

## Memoization
