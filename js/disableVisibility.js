function disableVisibility() {
  let elementHTMLTitle = document.getElementById("elementHTMLTitle");
  let elementHTMLText = document.getElementById("elementHTMLText");
  let accordionFluxograma = document.getElementById("accordionFluxograma");

  elementHTMLTitle.style.display = "none";
  elementHTMLText.style.display = "none";
  accordionFluxograma.style.display = "none";

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
