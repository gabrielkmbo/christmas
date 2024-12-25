window.onload = () => {
  // 1. After 1 second, remove "not-loaded" and animate the text
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "Merry Christmas Phoena 💓".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }
    appendTitle();
    clearTimeout(c);
  }, 1000);

  // 2. Create and append a button labeled "Open PDF"
  const openPdfButton = document.createElement("button");
  openPdfButton.textContent = "Open PDF";
  document.body.appendChild(openPdfButton);

  // 3. On click, open the PDF (replace with your file path or URL)
  openPdfButton.addEventListener("click", () => {
    window.open("christmas present.pdf", "_blank");
  });
};
