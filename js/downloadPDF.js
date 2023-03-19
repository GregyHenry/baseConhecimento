function downloadPDF() {
  const accordionMaster = document.getElementById('accordionMaster').innerHTML;
  const titleHtml = document.querySelector('.iframeTitle');
  const title = titleHtml.textContent;
  const font = 'Poppins';

  let estilo = '<style>';
  estilo +=
    '@page { size: A4; margin: 2cm; margin-top: 5mm; margin-bottom: 5mm; }';
  estilo +=
    '.btn-link {border: none;background-color: transparent; font-size: 18px; font-weight: bold; font-family: ' +
    font +
    ', Arial, sans-serif}';
  estilo += 'p {font-size: 14px; font-family: ' + font + ', Arial, sans-serif}';
  estilo +=
    '.btnPDF {background: #273c75;color: white;border-style: outset;border-color: #273c75;font: bold 15px arial,sans-serif;text-shadow: none;cursor: pointer;}';
  estilo += '</style>';

  const width = 700;
  const height = 700;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  const win = window.open(
    '',
    '',
    `height=${height}, width=${width}, left=${left}, top=${top}`
  );

  win.document.write('<html><header>');
  win.document.write('<title>');
  win.document.write(title);
  win.document.write('</title>');
  win.document.write(estilo);
  win.document.write('</header><body>');
  win.document.write(
    '<button class="btnPDF" onclick="window.print()"><strong>Download PDF</strong></button>'
  );
  win.document.write(accordionMaster);

  win.document.write('</body></html>');

  win.addEventListener('load', function () {
    setTimeout(function () {
      win.print();
    }, 2000);
  });
}
