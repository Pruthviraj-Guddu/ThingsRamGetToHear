// Function to speak a specific statement based on the element's ID
function speakStatement(statementId) {
    // Get the text content of the statement by its ID
    const text = document.getElementById(statementId).innerText;
  
    // Create a new SpeechSynthesisUtterance to speak the text
    const utterance = new SpeechSynthesisUtterance(text);
  
    // Use the SpeechSynthesis API to speak the text
    window.speechSynthesis.speak(utterance);
  }
  