function speakStatement(statementId) {
  // Get the text of the statement by its ID
  const text = document.getElementById(statementId).innerText;

  // Use the SpeechSynthesis API to read the text
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}
