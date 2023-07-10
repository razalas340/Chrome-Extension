chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(
      tab.id,
      { code: `
        const gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
        // rest of your content script code...
      ` },
      function (result) {
        // Handle the response from the content script, if needed
        // ...
      }
    );
  });