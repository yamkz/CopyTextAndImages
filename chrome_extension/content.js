
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "copyContent") {
    const selectedText = window.getSelection().toString();
    const selectedRange = window.getSelection().getRangeAt(0);
    const images = selectedRange.cloneContents().querySelectorAll('img');
    const imageMarkdownLinks = Array.from(images).map(img => `![${img.alt}](${img.src})`).join('\n');
    const fullContent = `${selectedText}\n${imageMarkdownLinks}`;
    navigator.clipboard.writeText(fullContent);
  }
});
