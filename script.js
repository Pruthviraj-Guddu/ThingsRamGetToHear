// Data array for teases with both Kannada and English text
const teases = [
    { 
      id: 'tease1',
      whatToRead: 'You will die single!',  // Text to read aloud
      whatToDisplay: 'You will die single!'  // Text to display
    },
    { 
      id: 'tease2',
      whatToRead: 'Rām, nīnu peddā.',  // Text to read aloud
      whatToDisplay: 'ರಾಮ್, ನೀನು ಪೆದ್ದಾ.'  // Text to display
    }
  ];
  
  // Function to generate the table rows and cells dynamically
  function generateTeaseTable() {
    const tableContainer = document.querySelector('.table');
    
    // Loop through each tease and create a row
    teases.forEach(tease => {
      const row = document.createElement('div');
      row.classList.add('row');
  
      const buttonCell = document.createElement('div');
      buttonCell.classList.add('cell');
      
      const button = document.createElement('button');
      button.textContent = 'Play';
      button.onclick = () => speakStatement(tease.id);
      buttonCell.appendChild(button);
  
      const textCell = document.createElement('div');
      textCell.classList.add('cell');
      
      // Create displayed text (whatToDisplay)
      const displayText = document.createElement('p');
      displayText.id = `${tease.id}-display`;
      displayText.classList.add('translation');
      displayText.textContent = tease.whatToDisplay;
  
      // Create text to read aloud (whatToRead)
      const readText = document.createElement('p');
      readText.id = `${tease.id}-read`;
      readText.classList.add('hidden-text');  // Hide this text from the page
      readText.textContent = tease.whatToRead;
  
      // Append the text elements to the textCell
      textCell.appendChild(displayText);
      textCell.appendChild(readText);
  
      row.appendChild(buttonCell);
      row.appendChild(textCell);
  
      tableContainer.appendChild(row);
    });
  }
  
  // Function to speak a specific statement based on the element's ID
  function speakStatement(statementId) {
    const tease = teases.find(tease => tease.id === statementId);
    
    // Get the text to read (whatToRead)
    const textToSpeak = document.getElementById(`${statementId}-read`).innerText;
  
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
  
    // Automatically detect the language of the text to speak
    if (/[\u0C80-\u0CFF]/.test(textToSpeak)) {
      // If the text contains Kannada characters, set the language to Kannada
      utterance.lang = 'kn-IN';  // Kannada language code
    } else {
      // Otherwise, assume English
      utterance.lang = 'en-US';  // English language code
    }
  
    window.speechSynthesis.speak(utterance);
  }
  
  // Generate the table when the page loads
  window.onload = generateTeaseTable;
  