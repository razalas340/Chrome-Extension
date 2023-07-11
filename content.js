function displayGrades() {
    const gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
  
    // Create an array to store the grade values
    const gradeValues = [];
  
    // Iterate through the values and push them to the gradeValues array
    gradeInputs.forEach((gradeInput) => gradeValues.push(gradeInput.textContent));
  
    // Send the grade values to the extension's popup
    chrome.runtime.sendMessage({ grades: gradeValues });
  }
  
  // Listen for messages from the extension's popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'displayGrades') {
      displayGrades();
    }
  });