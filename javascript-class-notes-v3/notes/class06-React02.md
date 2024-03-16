# class Note - 30th August 2023

## Review of JSX

- [check this tool out](https://transform.tools/html-to-jsx). Please convert your scissors project from HTML to react, use a PR approach to merge the react to the main branch.
- expression slots
- difference from HTML
  - className
  - htmlFor
  - lowercase HTML tags
  - closing of the self closing tags
  - lowercase attributes
- common mistakes or Gotchas
  - whitespace
  - image rendering

> Read More about [Scheduling API](https://javascript.info/settimeout-setinterval)

## [Review of Last Class - Lifecycle methods](https://stackblitz.com/edit/vitejs-vite-cdfpaj?file=src%2Fmain.jsx)

![Mount](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414630/altschool/zbibflubdqctr97uypls.png)
![Trigger](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414607/altschool/lc5f390mnj1ifqslmjka.png)
![Render](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414567/altschool/fhcffw6s7kiymvgsm5sf.png)
![Commit](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414598/altschool/jzsdiuxrcghj57qp2okt.png)

[Read More about life cycle on React.dev](https://react.dev/learn/render-and-commit)

### Here is a summary explanation of the lifecycle

![Explanation](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414557/altschool/vhpjg99swxpmazho5wxe.png)

Step 0: Mount with ReactDOM
Step 1: Trigger a render

- It’s the component’s initial render.
- The component’s (or one of its ancestors’) state has been updated.

Step 2: React renders your components
Step 3: React commits changes to the DOM

<!-- markdownlint-disable no-inline-html -->
<details>
  <summary>Summary</summary>
  <div>
    <p>
    Any screen update in a React app happens in three steps:
    </p>
    <ul>
      <li>Trigger</li>
      <li>Render</li>
      <li>Commit</li>
    </ul>
    <p>You can use Strict Mode to find mistakes in your components.</p>
    <p>React does not touch the DOM if the rendering result is the same as last time</p>
  </div>
</details>

## components

1. Props - function, string, numbers, arrays, object
   - default values ??

     ```jsx
     // another example of default value
     function FriendlyGreeting({ name = 'there' }) {
       return (
         <p>
           Hey {name}
         </p>
       );
     }
     ```

   - Fragment
   - Children
   <!-- classwork: create a Button component (borderColor, color, Children) (themeColor, Children) (status, children) -->
2. Props drilling (co-locating the state in the right component)

## Iteration; Rendering a list; Understanding the need for a key on each list

> NB. Keys work with React.Fragment and not <>(shorthand)

## Conditional Rendering

1. if
2. &&
3. ternary
4. showing and hiding

## Styling

1. inline Styling
2. CSS Modules
3. Styled Components

## Class Take Home Project and Assignments

- Take Home Project ([Star](https://stackblitz.com/edit/vitejs-vite-3f4sce?file=src%2FStarRating.jsx), [Grid](https://github.com/Oluwasetemi/Grid-AltSchoolClassWork)). Solution Image ([Star](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414531/altschool/ac1zhvoquhdtai5hr8er.png)). ([Grid](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414503/altschool/oxtmohuvcsswye05wppl.png))

Solution Image
![Star](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414531/altschool/ac1zhvoquhdtai5hr8er.png)
![Grid](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414503/altschool/oxtmohuvcsswye05wppl.png)

- Assignments

  ![Build This](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414546/altschool/ecmzlfp9cgirsp49pogd.png)
  ![Guide](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414582/altschool/rvusio6qu56lboje9un5.png)

  [Building this out](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414546/altschool/ecmzlfp9cgirsp49pogd.png). Use this [image as a guide to each button](https://res.cloudinary.com/drnqdd87d/image/upload/v1693414582/altschool/rvusio6qu56lboje9un5.png). (source the icons from `react-feather` npm package). Add an effect that allows the page title to be updated with the latest count. ([Submit before next class](https://forms.gle/nt2j6fSHJFuToktq9))

## BONUS: [Converting an Old react project with classes to functions](https://stackblitz.com/edit/react-lifting-state-up-intro?file=index.js)

TODO: [Fix the errors in this project after migrating to the latest react and reactDOM version, change the class to function.](https://stackblitz.com/edit/react-egghead-stopwatch?file=index.js)

[SOLUTION TO THE TODO](https://stackblitz.com/edit/react-egghead-stopwatch-senn6m?file=index.js)

> *NEXT CLASS WILL FOCUS ON STATE AND HOOKS*

<!-- CURRENT ASSIGNMENTS -->
<!-- javascript pick 2 from 3 question that has test midnight of 31st August -->
<!-- Circle Assignment - JavaScript Calculator(PR link as the evidence during class defense) (16th September) -->
<!-- Convert our scissors html to React (PR) -->