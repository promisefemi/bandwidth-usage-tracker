console.log(chrome.devtools);
chrome.devtools.network.onRequestFinished.addListener(function (request) {
    console.log(request)
})