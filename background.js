function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url})
  });
}
let color = '#3aa757'; 

chrome.runtime.onInstalled.addListener(() => { 
  chrome.storage.sync.set({ color }); 
  console.log('Default background color set to %cgreen', `color: ${color}`); 
});

chrome.commands.onCommand.addListener(function(command) {
  if (command == "trigger_search") {
    console.log(window);
  }
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("https://www.google.com");
});
