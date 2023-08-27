console.log("FROM REQUEST WATCH")


//
// document.addEventListener("DOMContentLoaded", function () {
//
//     let resources = performance.getEntriesByType("resource")
//     console.log(resources)
//     resources.forEach(function (resource) {
//         console.log(resource)
//         console.log(`Type: ${resource.initiatorType} -- Encoded Body Size ${resource.encodedBodySize} -- Dencoded Body Size ${resource.decodedBodySize}`)
//         console.log(`------------------------================------------------------`)
//     })
//
// })
//

console.log(window.location)
function pObserver(list, observer) {
    let itemCover = Math.random()
    list.getEntries().forEach(function (resource, index) {
        console.log("RESOURCE INDEX", index)
        console.log(resource)
        console.log(`Type: ${resource.initiatorType} -- Encoded Body Size ${resource.encodedBodySize} -- Dencoded Body Size ${resource.decodedBodySize}`)
    })
    console.log(observer, "PERFORMANCE OBSERVER")
    console.log(`------------------------================------------------------`)

}

let observer = new PerformanceObserver(pObserver)
observer.observe({entryTypes: ["resource"]})


/*
* sitedata
* website
* favicon
* name
* type
* size
* timeCaptured
* 
*
* */