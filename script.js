// Data array for teases with both Kannada and English text
const teases = [
  {
    id: "tease1",
    whatToRead: "You will die single!", // Text to read aloud
    whatToDisplay: "You will die single!", // Text to display
  },
  {
    id: "tease2",
    whatToRead: "Rām, nīnu peddā.", // Text to read aloud
    whatToDisplay: "ರಾಮ್, ನೀನು ಪೆದ್ದಾ.", // Text to display
  },
  {
    id: "tease3",
    whatToRead: "Rām, Taleya illa.", // Text to read aloud
    whatToDisplay: "ರಾಮ್, ತಲೆ ರಿಲ್ಲ..", // Text to display
  },
];

// Utility function to create a DOM element with specific classes and content
function createElement(tag, classes = [], content = "") {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  element.textContent = content;
  return element;
}

// Function to generate the table rows and cells dynamically
function generateTeaseTable() {
  const tableContainer = document.querySelector(".table");

  teases.forEach((tease) => {
    const row = createElement("div", ["row"]);

    // Create button cell
    const buttonCell = createElement("div", ["cell"]);
    const button = createElement("button", [], "Play");
    button.onclick = () => speakStatement(tease.id);
    buttonCell.appendChild(button);

    // Create text cell
    const textCell = createElement("div", ["cell"]);
    const displayText = createElement(
      "p",
      ["translation"],
      tease.whatToDisplay
    );
    displayText.id = `${tease.id}-display`;
    const readText = createElement("p", ["hidden-text"], tease.whatToRead);
    readText.id = `${tease.id}-read`;

    textCell.append(displayText, readText);
    row.append(buttonCell, textCell);
    tableContainer.appendChild(row);
  });
}

// Function to speak a specific statement based on the element's ID
function speakStatement(statementId) {
  const tease = teases.find((tease) => tease.id === statementId);
  const textToSpeak = document.getElementById(`${statementId}-read`).innerText;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);

  // Detect the language of the text to speak using a simple check for Kannada characters
  utterance.lang = /[\u0C80-\u0CFF]/.test(textToSpeak) ? "kn-IN" : "en-US";

  // Set the rate for slower speech
  utterance.rate = 0.7; // Default is 1.0, lower values make the speech slower

  window.speechSynthesis.speak(utterance);
}

// Generate the table when the page loads
window.onload = generateTeaseTable;
