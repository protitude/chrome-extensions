
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
   if (changeInfo.status == 'complete') {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: "SendIt"}, function(response) {});
      });
   }
});

chrome.extension.onRequest.addListener(function(request, sender) {
  if ( request.message === "activate_shortlink" ) {
    chrome.pageAction.show(sender.tab.id);
  }
});

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
