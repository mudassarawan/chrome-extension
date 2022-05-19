const cartAddBtn = document.querySelector("button");

cartAddBtn.addEventListener('click', () => {
    // console.log("m clicked from popup");

    // chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
    //     if(!tabs.length) return;

    //     chrome.tabs.sendMessage(tabs[0].id, { type: 'hello', payload: 'from popup.js'}, (response) => {
    //         console.log(response);
    //     })
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", payload : 'from popup'}, function(response) {
          console.log(response.farewell);
        });
    });
})

