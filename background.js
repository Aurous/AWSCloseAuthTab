chrome.runtime.onMessage.addListener((req, sender) => setTimeout(chrome.tabs.remove([sender.tab.id]), 1000));