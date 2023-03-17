function hideMenu() {
  let elementMenu = document.getElementById('sidebar');
  elementMenu.classList.remove('active');
}

function disableVisibility() {
  let elementHTMLTitle = document.getElementById('elementHTMLTitle');
  let elementHTMLText = document.getElementById('elementHTMLText');

  document.addEventListener('click', function (event) {
    if (
      event.target.id === 'insomnia-link' ||
      event.target.id === 'contactMail'
    ) {
      elementHTMLTitle.style.display = 'none';
      elementHTMLText.style.display = 'none';
      createIframe();
      hideMenu();
    } else if (
      event.target.tagName.toLowerCase() === 'a' &&
      event.target.id !== 'sidebarCollapse'
    ) {
      window.location.href = 'index.html';
    }
  });
}

function createIframe() {
  let contentDiv = document.getElementById('content');
  let iframe = document.createElement('iframe');
  iframe.id = 'openPages';
  iframe.name = 'iframe';
  contentDiv.appendChild(iframe);
}
