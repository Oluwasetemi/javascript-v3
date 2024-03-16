import {
  env,
  pipeline,
} from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0';
import './style.css';
import './utils/bling';

console.log({ env, pipeline });

env.allowLocalModels = false;

const status = $('#status');
const image = $('#image-container');
const fileInput = $('#file-upload');

console.log({ status, image, fileInput });

status.textContent = 'Loading model...';
const detector = await pipeline('object-detection', 'Xenova/detr-resnet-50');
console.log({ detector });
status.textContent = 'Ready';

fileInput.on('change', function (event) {
  console.log('fileInput change event', event);
  const file = event.target.files[0];

  if (!file) return;

  console.log({ file });
  const reader = new FileReader();

  reader.onload = function (readerEvent) {
    console.log('reader onload event', readerEvent);
    console.log(readerEvent.target.result);
    const imageEl = mk('img', { src: readerEvent.target.result });
    console.log({ imageEl });
    image.innerHTML = '';
    image.appendChild(imageEl);

    // pass image to detect
    detect(imageEl);
  };

  reader.readAsDataURL(file);
});

async function detect(image) {
  console.log('detecting...');
  status.textContent = 'Model is analysing the image';
  const output = await detector(image.src, {
    threshold: 0.5,
    percentage: true,
  });
  console.log({ output });
  status.textContent = 'Done';
  output.forEach(render);
}

function render({ box, label }) {
  console.log('rendering...');
  console.log({ box, label });

  // draw a rectangle around all the objects
  const { xmin, xmax, ymin, ymax } = box;
  // console.log({xmin, xmax, ymin, ymax})

  let colorGen = color1();

  console.log({ colorGen });

  const rect = mk(
    'div',
    {
      style: `border-color:${colorGen};top: ${ymin * 100}%;left: ${
        xmin * 100
      }%;width: ${(xmax - xmin) * 100}%;height: ${(ymax - ymin) * 100}%`,
      className: 'bounding-box',
    },
    [
      mk(
        'span',
        {
          className: 'bounding-box-label',
          style: `color: ${colorGen}`,
        },
        [label],
      ),
    ],
  );
  // console.log({rect})

  image.appendChild(rect);
}

function color(num) {
  return Math.floor(Math.random() * num);
}
let color1 = () => `hsl(${color(360)} 100% 50%)`;

let randomColor = () => `rgb(${color(256)}, ${color(256)}, ${color(256)})`;

const colorHex =
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, 0);
console.log(colorHex);

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

console.log(generateRandomColor());

// random color using hsl()
console.log(color1());

console.log(randomColor());
