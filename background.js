chrome.runtime.onInstalled.addListener(() => {
    console.log(chrome)
    // chrome.devtools.network.onRequestFinished.addListener(
    //     function (request) {
    //         console.log(request, "REQUEST FROM BANDWIDTH")
    //     }
    // )


});

var requestFilter ={
    // types:[
    //     "main_frame",
    //     "sub_frame",
    //     "script",
    //     "image",
    //     "font",
    //     "object",
    //     "xmlhttprequest",
    //     "stylesheet",
    //     "xmlhttprequest",
    //     "media",
    //     "websocket",
    // ],
    urls:[
        "<all_urls>"
    ]
};

let extraInfoSec=[
    // "responseHeaders",
    "extraHeaders",
    // "requestBody"
]

chrome.webRequest.onCompleted.addListener(function (request) {
    console.log(request, "WEB REQUEST")
},requestFilter,extraInfoSec)