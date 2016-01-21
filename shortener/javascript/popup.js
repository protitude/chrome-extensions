
var backgroundPage = chrome.extension.getBackgroundPage();

chrome.tabs.getSelected(null, function(currentTab){var currentUrl = currentTab.url;
  chrome.tabs.executeScript(null, {file: "javascript/getUrl.js"});
  getNative();
});

function getNative() {
  chrome.extension.onConnect.addListener(function(port) {
    console.assert(port.name == "getProvidedUrl");
    port.onMessage.addListener(function(msg) {
      switch (msg.provided) {
        case true:
          updateTxt("success", msg.url);
          break;
        default:
          updateTxt("success", msg.url);
      }
    });
    port.postMessage({status: "gotIt"}); //Tell to close the connection
  });
}

function updateTxt(status, message) {
  switch(status) {
    case "success":
      $('#txt').addClass("success");
      $('#txt').text(message);
      copyUrl(message);
      break;
    case "error":
      $('#txt').addClass("error");
      $('#txt').text(message);
      break;
    default:
      $('#txt').text(message);
  }
}

function copyUrl(value) {
  $('<input type="text" id="copytxt" />').appendTo('body');
  $('#copytxt').css({'position': 'absolute'});
  $('#copytxt').val(value);
  document.getElementById('copytxt').select();
  document.execCommand('Copy');
  $('#copytxt').remove();
  $('#status').css('display','inherit');
  document.getElementById('status').innerHTML = chrome.i18n.getMessage("copied");
}
