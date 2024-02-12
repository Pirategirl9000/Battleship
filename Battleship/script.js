const game1 = document.getElementById("game1");
const game2 = document.getElementById("game2");
const game3 = document.getElementById("game3");

const music = new Audio();
music.src = "Music.mp3";
music.loop = true;
music.play();

const miss = new Audio();
miss.src = "No-Attribution-SFX/Miss.mp3";

const shoot = new Audio();
shoot.src = "Shoot.mp3";

const hit = new Audio();
hit.src = "Hit.mp3";

var g1Cells = [];
var g2Cells = [];
var g3Cells = [];

var g1Ships = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
];
var g2Ships = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
];
var g3Ships = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
];

var overrideButton = false;
var hideButton = false;

//typical game is 6x6
function makeGrid(columns, rows) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let gridCell = document.createElement('div');
      gridCell.className = 'cell';
      gridCell.style.background = "green";

      g1Cells.push(gridCell);
      game1.appendChild(gridCell);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let gridCell = document.createElement('div');
      gridCell.className = 'cell';
      gridCell.style.background = "green";

      g2Cells.push(gridCell);
      game2.appendChild(gridCell);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let gridCell = document.createElement('div');
      gridCell.className = 'cell';
      gridCell.style.background = "green";

      g3Cells.push(gridCell);
      game3.appendChild(gridCell);
    }
  }
  addlisteners();
}
function addlisteners() {
  for (let i = 0; i < g1Cells.length; i++) {
    g1Cells[i].addEventListener("click", () => {click(i, 1);});
  }

  for (let i = 0; i < g2Cells.length; i++) {
    g2Cells[i].addEventListener("click", () => {click(i, 2);});
  }

  for (let i = 0; i < g3Cells.length; i++) {
    g3Cells[i].addEventListener("click", () => {click(i, 3);});
  }
}
function fireMode() {
  if (overrideButton){return;}

  
  for (let i = 0; i < g1Cells.length; i++) {
    g1Cells[i].style.background = "blue";
  }

  for (let i = 0; i < g2Cells.length; i++) {
    g2Cells[i].style.background = "blue";
  }

  for (let i = 0; i < g3Cells.length; i++) {
    g3Cells[i].style.background = "blue";
  }

  document.getElementById("button").style.opacity = 0;
  document.getElementById("hideBtn").style.opacity = 0;
  overrideButton = true;
  hideButton = true;
}
function hide() {
  if (hideButton) {return;}
  for (let i = 0; i < g1Cells.length; i++) {
    g1Cells[i].style.background = "green";
  }

  for (let i = 0; i < g2Cells.length; i++) {
    g2Cells[i].style.background = "green";
  }

  for (let i = 0; i < g3Cells.length; i++) {
    g3Cells[i].style.background = "green";
  }
}

function click(id, game) {
  let color;
  
  switch(game) {
    case 1: 
      color = g1Cells[id].style.background;



      //SHITTY OPTIMIZATION EXHIBIT-A:
      if (color == "green") {
        g1Ships[id] = 1
        g1Cells[id].style.background = "grey";
        break;
      } else if (color == "grey") {
        break;
      } else if (color == "red") {
        break;
      } else if (color == "white") {
        break;
      } else if (color == "orange") {
        break;
      }else if (color == "blue") { //check tile
        if (g1Ships[id] == 1) {
          shoot.play();
          g1Cells[id].style.background = "orange";
          setTimeout(() => {
            g1Cells[id].style.background = "red";
            hit.play();
          }, 1000);
        } else {
          shoot.play();
          g1Cells[id].style.background = "orange";
          setTimeout(() => {
            g1Cells[id].style.background = "white";
            miss.play();
          }, 1000);
        }
        break;
      }

    //GAME 2
    case 2:
      color = g2Cells[id].style.background;

      //SHITTY OPTIMIZATION EXHIBIT-B:
      if (color == "green") {
        g2Ships[id] = 1
        g2Cells[id].style.background = "grey";
        break;
      } else if (color == "grey") { 
        break;
      } else if (color == "red") { 
        break;
      } else if (color == "white") { 
        break;
      } else if (color == "orange") {
        break;
      } else if (color == "blue") { //check tile
        if (g2Ships[id] == 1) {
          g2Cells[id].style.background = "orange";
          shoot.play();
          setTimeout(() => {
            g2Cells[id].style.background = "red";
            hit.play();
          }, 1000);
        } else {
          g2Cells[id].style.background = "orange";
          shoot.play();
          setTimeout(() => {
            g2Cells[id].style.background = "white";
            miss.play();
          }, 1000);
        }
        break;
      }
    case 3:
      color = g3Cells[id].style.background;
      
      //SHITTY OPTIMIZATION EXHIBIT-C:
      if (color == "green") {
        g3Ships[id] = 1
        g3Cells[id].style.background = "grey";
        break;
      } else if (color == "grey") { 
        break;
      } else if (color == "red") {
        break;
      } else if (color == "white") {
        break;
      } else if (color == "orange") {
        break;
      } else if (color == "blue") { //check tile
        if (g3Ships[id] == 1) {
          shoot.play();
          g3Cells[id].style.background = "orange";
          setTimeout(() => {
            g3Cells[id].style.background = "red";
            hit.play();
          }, 1000);
        } else {
          shoot.play();
           g3Cells[id].style.background = "orange";
          setTimeout(() => {
            g3Cells[id].style.background = "white";
            miss.play();
          }, 1000);
        }
        break;
      }

      
  }
}

makeGrid(6, 6);

