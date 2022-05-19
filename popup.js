import { sendMessage } from "./utils";

const cartAddBtn = document.querySelector("button");

cartAddBtn.addEventListener('click', () => {
    
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", payload : 'from popup'}, function(response) {
    //       console.log(response.farewell);
    //     });
    // });

    sendMessage({ greeting: "hello", payload: "from popup.js"})
    .then( response => console.log(response))
    .catch(console.log);
});

