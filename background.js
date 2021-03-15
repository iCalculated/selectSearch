chrome.commands.onCommand.addListener(function(command) {
  if (command == "trigger_search") {  
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
      chrome.scripting.executeScript(
        {
          target: {tabId: tabs[0].id},
          files: ['search.js']
        },
        () => {}
      );
    });
  }
});
