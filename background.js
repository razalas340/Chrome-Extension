chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['script.js']
    }, function (result) {
      // Handle the response from the content script, if needed
      // ...
    });
  });