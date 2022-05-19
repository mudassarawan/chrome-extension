export const sendMessage = async (msg) => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  
    return new Promise((resolve, reject) => {
    if (!tabs.length) reject("No active tabs");

        chrome.tabs.sendMessage(tabs[0].id, msg, (response) => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            if (response) resolve(response.payload);
            reject("No response");
        });
    });
};