
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "copyTextAndImage",
    "title": "テキストと画像URLをコピー",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "copyTextAndImage") {
    chrome.tabs.sendMessage(tab.id, {action: "copyContent"});
  }
});
