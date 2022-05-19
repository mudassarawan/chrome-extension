// console.log("injected into the browser");

// chrome.runtime.onConnect.addListener((message, sender, reply) => {
//     if(message.type === 'hello') {
//         console.log(message.payload);
//         reply('from content-script : World');
//     }
// })

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "Hello from the popup");
      if (request.greeting == "hello")
        sendResponse({farewell: "Acknowledged from Content Script"});
    }
  );