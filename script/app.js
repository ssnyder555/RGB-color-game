let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');

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
    changeColors(clickedColor);
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
