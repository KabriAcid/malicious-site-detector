console.log("🔍 Malicious Site Detector is running...");

const suspiciousWords = [
  "login",
  "verify",
  "bank",
  "password",
  "wallet",
  "crypto",
];

const pageText = document.body.innerText.toLowerCase();

const found = suspiciousWords.some((word) => pageText.includes(word));

if (found) {
  alert("⚠️ This site might be suspicious!");
}
