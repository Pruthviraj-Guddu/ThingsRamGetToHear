// Data array for teases
const teases = [
  { id: "tease1", text: "You will die single!" },
  { id: "tease2", text: "ರಾಮ್, ನೀನು ಪೆದ್ದಾ." },
  { id: "tease3", text: "TextText" },

];

// Function to generate the table rows and cells dynamically
function generateTeaseTable() {
  const tableContainer = document.querySelector(".table");

  // Loop through each tease and create a row
  teases.forEach((tease) => {
    const row = document.createElement("div");
    row.classList.add("row");

    const buttonCell = document.createElement("div");
    buttonCell.classList.add("cell");

    const button = document.createElement("button");
    button.textContent = "Play";
    button.onclick = () => speakStatement(tease.id);
    buttonCell.appendChild(button);

    const textCell = document.createElement("div");
    textCell.classList.add("cell");

    const text = document.createElement("p");
    text.id = tease.id;
    text.textContent = tease.text;
    textCell.appendChild(text);

    row.appendChild(buttonCell);
    row.appendChild(textCell);

    tableContainer.appendChild(row);
  });
}

// Function to speak a specific statement based on the element's ID
function speakStatement(statementId) {
  const text = document.getElementById(statementId).innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

// Generate the table when the page loads
window.onload = generateTeaseTable;
