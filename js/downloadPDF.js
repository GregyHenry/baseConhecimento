var isExpanded = false;

function expandAll() {
  let accordions = document.getElementsByClassName("collapse");
  for (let i = 0; i < accordions.length; i++) {
    if (accordions[i].classList.contains("show") == false) {
      accordions[i].classList.add("show");
    }
  }
  isExpanded = true;
}

function downloadPDF() {
  if (!isExpanded) {
    expandAll();
  }
  window.print();
}

const downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", function () {
  downloadPDF();
});
