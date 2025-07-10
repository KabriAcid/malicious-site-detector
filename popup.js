document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];

    chrome.scripting.executeScript(
      {
        target: { tabId: currentTab.id },
        func: scanPage, // Not function: => arrow function—use named function
      },
      (injectionResults) => {
        const result = injectionResults[0].result;
        const statusDiv = document.getElementById("status");

        if (result === "suspicious") {
          statusDiv.textContent = "Warning: This site looks suspicious!";
          statusDiv.className = "alert alert-danger";
        } else {
          statusDiv.textContent = "This site looks safe.";
          statusDiv.className = "alert alert-success";
        }
      }
    );
  });
});

// Function to inject
function scanPage() {
  const suspiciousWords = [
    "login",
    "verify",
    "account",
    "password",
    "bank",
    "crypto",
  ];
  const pageText = document.body.innerText.toLowerCase();
  const hasPasswordField =
    document.querySelectorAll('input[type="password"]').length > 0;
  const wordFound = suspiciousWords.some((word) => pageText.includes(word));
  return wordFound || hasPasswordField ? "suspicious" : "safe";
}
