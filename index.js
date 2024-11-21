// === State ===
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// This is also where we define functions to modify the state.
// TODO: Add support for more colors
const colors = ["red", "green", "blue", "aqua", "purple", "orange", "yellow"];
const sizes = ["small", "medium", "large"];
const maxShapes = 10;
const shapes = [
  {
    color: "red",
    size: "small",
  },
  {
    color: "purple",
    size: "small",
  },
];

/** Adds a shape with random properties to the `shapes` array */
function addShape() {
  const color = colors[Math.floor(Math.random() * colors.length)];

  // TODO: Randomize the size of the shape
  const size = sizes[Math.floor(Math.random() * sizes.length)];
  shapes.push({ color, size });
}

// === Render ===
// To "render" is to update the DOM to reflect the current state.
// In this section, we define the functions to render state.

/** Updates the DOM to reflect the current state. */
function render() {
  // Render the squares
  const squareList = document.querySelector("#squares"); //get ul from HTML

  const squareElements = shapes.map((shape) => { //for each shape in shapes array, which can become more
    const squareElement = document.createElement("li"); //gonna create a li element 
    squareElement.classList.add(shape.color, shape.size); //dynamically adds one or more CSS classes to a DOM element. 
    return squareElement; //map each li into the squareElements array
  });

  squareList.replaceChildren(...squareElements);  //replacing all children of ul with newly come li

  // TODO: Render the circles
  const circleList = document.querySelector("#circles");
  const circleElements = shapes.map((shape)=>{
    const circleElement = document.createElement("li");
    circleElement.classList.add("circle",shape.color, shape.size);
    return circleElement;
  });
  circleList.replaceChildren(...circleElements);
}

// === Script ===
// In this section, we call the functions that we've defined above.
// `setInterval` will call the callback function every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(() => {
  addShape();
  render();
  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if (shapes.length >= maxShapes) {clearInterval(addShapeIntervalId);}
}, 1000);

render(); // We call this function once to render the initial state


