// function displayGrades() {
//     const gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
  
//     // Create an array to store the grade values
//     const gradeValues = [];
  
//     //iterate through the values and push them to the gradeValues array
//     gradeInputs.forEach((gradeInput) => gradeValues.push(gradeInput.outerText));
  
//     // Get the container element to display the grades
//     const gradesContainer = document.getElementById('gradesContainer');
  
//     // Clear any previous content
//     gradesContainer.innerHTML = '';
  
//     // Create a paragraph for each grade and append it to the container
//     gradeValues.forEach((grade) => {
//       const gradeParagraph = document.createElement('p');
//       gradeParagraph.textContent = `Grade: ${grade}`;
//       gradesContainer.appendChild(gradeParagraph);
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     // Get the button element by its ID
//     var button = document.getElementById('gradesButton');
  
//     // Add event listener to the button
//     button.addEventListener('click', displayGrades);
//   });

document.addEventListener('DOMContentLoaded', function() {
  // Get the button element by its ID
  var button = document.getElementById('gradesButton');

  // Add event listener to the button
  button.addEventListener('click', function() {
    // Send a message to the content script to trigger the displayGrades function
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'displayGrades' });
    });
  });
});