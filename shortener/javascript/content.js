chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.action == 'SendIt') {
    var linkTag = document.getElementsByTagName('link');
    var i=0;
    for (i=0;i<linkTag.length;i++) {
    if (linkTag[i].rel=="shortlink" || linkTag[i].rel=="shorturl" || linkTag[i].id=="shorturl") {
        chrome.extension.sendRequest({"message": "activate_shortlink"});
      }
    }
  }
});
