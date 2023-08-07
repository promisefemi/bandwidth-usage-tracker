var injectableScript = document.createElement("script")
injectableScript.src = chrome.runtime.getURL("requestwatch.js")

(document.head || document.documentElement).appendChild(injectableScript)
//
// injectableScript.onload = function(){
//     injectableScript.remove()
// }
