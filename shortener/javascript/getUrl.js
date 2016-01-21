
var linkTag = document.getElementsByTagName('link');
var i=0;
for (i=0;i<linkTag.length;i++) {
  if (linkTag[i].rel=="shortlink" || linkTag[i].rel=="shorturl" || linkTag[i].id=="shorturl") {
    var result=linkTag[i].href;
    break;
  }
}

var port = chrome.extension.connect({name: "getProvidedUrl"});

if (result != "none" || result != null) {
  port.postMessage({provided: true, url: result}); //give the original url
  port.onMessage.addListener(function(msg) {
  if (msg.status == "gotIt") {
    port.disconnect();
  }
  });
}
