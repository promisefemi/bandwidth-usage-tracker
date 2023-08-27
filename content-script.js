var injectableScript = document.createElement("script")
injectableScript.src = chrome.runtime.getURL("requestwatch.js")
injectableScript.onload = function () {
    injectableScript.remove()
};
(document.head || document.documentElement).appendChild(injectableScript);