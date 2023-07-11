chrome.action.onClicked.addListener(async () => {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    await chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ['script.js'],
    });
  });