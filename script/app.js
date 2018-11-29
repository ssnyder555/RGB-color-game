let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
// this is the way to combine both easy and hard buttons
let modeButtons = document.querySelectorAll('.mode');
// now we are going to loop through our buttons
// this way is better bc if we want to add harder difficulty
// in the future. we dont have to add extra listiners
// bc we are selecting all of them

for (let i = 0; i < modeButtons.length; i++ {
  modeButtons[i].addEventListener('click', function(){
    modeButtons[0].classList.remove('selected');
    modeButtons[1].classList.remove('selected');
    this.classList.add('selected');

    // figureout how many squares to show
    // pick new colors
    // pick a new pickedColor
    // update the page to reflect the changes
  });
})

function reset(){
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = 'New Colors';

  messageDisplay.textContent = "";
  // change colrs of squares
  for (let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = 'darkgrey';

}

// this is the long way: down bellow
// let easyBtn = document.querySelector('#easyBtn');
// let hardBtn = document.querySelector('#hardBtn');

// there is anothew way to loop through the buttons:

// easyBtn.addEventListener('click', function(){
//   hardBtn.classList.remove('selected');
//   easyBtn.classList.add('selected');
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   // loop through to get 3 squares in game
//   for (let i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = 'none';
//     }
//   }
//
// });
// hardBtn.addEventListener('click', function(){
//   hardBtn.classList.add('selected');
//   easyBtn.classList.remove('selected');
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   // loop through to get 3 squares in game
//   for (let i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = 'block';
//
//   }
// });
resetButton.addEventListener('click', function(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = 'New Colors';

  messageDisplay.textContent = "";
  // change colrs of squares
  for (let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = 'darkgrey';
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
  // add inital colors to squares
  squares[i].style.background = colors[i];

  // add click listiners to squares
  squares[i].addEventListener('click', function(){
  // grab color of clicked square
   let clickedColor = this.style.background
  // compare colr to pickedColor
  if(clickedColor === pickedColor){
    messageDisplay.textContent = "Correct";
    resetButton.textContent = 'Play Again?'
    changeColors(clickedColor);
    h1.style.background = clickedColor;
  } else {
    this.style.background = "#232323";
    messageDisplay.textContent = "Try Again";
  }
  });
}

function changeColors(color){
  // loop through all squares
  for (let i = 0; i < colors.length; i++){
    squares[i].style.background = color;
  }
  // change each color to match given color
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  let arr = []
  // add num random colors to array
  for (let i = 0; i < num; i++){
    arr.push(randomColor());
    // get random color and push into arr
  }
  // return that array
  return arr;
}
function randomColor(){
  // pick a "red" from 0 - 255
  let r = Math.floor(Math.random() * 256)
  // pick a green from 0 -255
  let g = Math.floor(Math.random() * 256)
  // pick a blue from 0 -255
  let b = Math.floor(Math.random() * 256)
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
