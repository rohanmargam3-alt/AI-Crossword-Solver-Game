const gridLayout = [
  ["", "", "#", "", ""],
  ["", "", "#", "", ""],
  ["#", "", "", "", "#"],
  ["", "", "#", "", ""],
  ["", "", "#", "", ""]
];

const dictionary = [
  "cat", "dog", "hot", "java", "python",
  "intelligence"
];

// Create Grid
const grid = document.getElementById("grid");

function createGrid() {
  grid.innerHTML = "";
  gridLayout.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === "#") {
        let div = document.createElement("div");
        div.classList.add("cell", "block");
        grid.appendChild(div);
      } else {
        let input = document.createElement("input");
        input.classList.add("cell");
        input.maxLength = 1;
        input.id = `${i}-${j}`;
        grid.appendChild(input);
      }
    });
  });
}

createGrid();

// Get word from grid
function getWord(cells) {
  return cells.map(id => document.getElementById(id).value).join("");
}

// Set word to grid
function setWord(cells, word) {
  cells.forEach((id, i) => {
    document.getElementById(id).value = word[i];
  });
}

// AI Solver (simple matching)
function solveCrossword() {

  // Across 1 (0,0 → 0,1)
  let across1 = ["0-0", "0-1"];
  let across2 = ["0-3", "0-4"];

  let down1 = [
    "0-0","1-0","3-0","4-0"
  ];

  // Try dictionary words
  dictionary.forEach(word => {
    if (word.length === 2) {
      setWord(across1, word);
    }
    if (word.length === 2) {
      setWord(across2, word);
    }
    if (word.length === 4) {
      setWord(down1, word);
    }
  });

  alert("AI attempted to solve!");
}
