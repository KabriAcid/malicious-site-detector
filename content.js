console.log("🚨 Malicious Site Detector is active");

// List of suspicious keywords (expand as needed)
const suspiciousWords = [
  "login",
  "verify",
  "account",
  "password",
  "bank",
  "crypto",
  "wallet",
  "recovery",
  "seed phrase",
  "airdrop",
  "earn",
  "urgent",
];

// Get all visible text from the page
const pageText = document.body.innerText.toLowerCase();

// Check for suspicious words
const containsSuspiciousWords = suspiciousWords.some((word) =>
  pageText.includes(word)
);

// Check for password fields
const hasPasswordField =
  document.querySelectorAll('input[type="password"]').length > 0;

// If anything suspicious is found
if (containsSuspiciousWords || hasPasswordField) {
  alert(
    "⚠️ Warning: This website may be suspicious!\nStay cautious before entering sensitive information."
  );
}
