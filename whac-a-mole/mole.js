// let currMoleTile; // Holds the current tile with the mole
// let currPlantTile; // Holds the current tile with the plant
// let score = 0; // Tracks the player's score
// let gameOver = false; // Tracks if the game is over

// window.onload = () => {
//   setGame();
// };

// const setGame = () => {
//   // Set up the grid in HTML
//   for (let i = 0; i < 9; i++) {
//     // Create a div element dynamically
//     const tile = document.createElement("div"); // Creates a new <div> element

//     tile.id = i.toString(); // Assigns an id to the div (0 to 8 as strings)

//     tile.addEventListener("click", () => selectTile(tile)); // Adds an event listener for click

//     document.getElementById("board").appendChild(tile); // Appends the div to the "board" element
//   }
// };
// // for generate random number
// function getRandomTile() {
//   let num = Math.floor(Math.random() * 9); // Random number between 0 and 8
//   return num.toString(); // Convert to string for id matching
// }
// // set mole
// function setMole() {
//   if (gameOver) return; // Stop if the game is over

//   if (currMoleTile) {
//     currMoleTile.innerHTML = ""; // Clear the current mole tile
//   }

//   let mole = document.createElement("img"); // Create a mole image
//   mole.src = "./monty-mole.png"; // Path to mole image file

//   let num = getRandomTile(); // Get a random tile id
//   if (currPlantTile && currPlantTile.id == num) return; // Avoid placing mole on a plant tile

//   currMoleTile = document.getElementById(num); // Set the new mole tile
//   currMoleTile.appendChild(mole); // Add the mole image to the tile
// }

// // set plant
// function setPlant() {
//   if (gameOver) return; // Stop if the game is over

//   if (currPlantTile) {
//     currPlantTile.innerHTML = ""; // Clear the current plant tile
//   }

//   let plant = document.createElement("img"); // Create a plant image
//   plant.src = "./piranha-plant.png"; // Path to plant image file

//   let num = getRandomTile(); // Get a random tile id
//   if (currMoleTile && currMoleTile.id == num) return; // Avoid placing plant on a mole tile

//   currPlantTile = document.getElementById(num); // Set the new plant tile
//   currPlantTile.appendChild(plant); // Add the plant image to the tile
// }
// // select tile
// function selectTile() {
//   if (gameOver) return; // Stop if the game is over

//   if (this == currMoleTile) {
//     // If the clicked tile has the mole
//     score += 10; // Increment the score
//     document.getElementById("score").innerText = score.toString(); // Update the score display
//   } else if (this == currPlantTile) {
//     // If the clicked tile has the plant
//     document.getElementById("score").innerText =
//       "GAME OVER: " + score.toString(); // Display the final score
//     gameOver = true; // End the game
//   }
// }

let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  //set up the grid in html
  for (let i = 0; i < 9; i++) {
    //i goes from 0 to 8, stops at 9
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
  setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
  //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString(); //update score html
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString(); //update score html
    gameOver = true;
  }
}
