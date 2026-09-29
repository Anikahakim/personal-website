// Set footer year and "currently" date, plus copy-email button. No framework needed.
var now = new Date();
document.getElementById("year").textContent = now.getFullYear().toString();
var today = document.getElementById("today");
if (today) {
  today.textContent = now.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}
var copyBtn = document.getElementById("copy-email");
if (copyBtn) {
  copyBtn.addEventListener("click", function () {
    var address = document.getElementById("email").textContent;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(address).then(function () {
        copyBtn.textContent = "copied!";
      });
    }
  });
}
