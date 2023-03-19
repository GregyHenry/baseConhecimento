const form = document.getElementById('form');
const mailInput = document.getElementById('mail');
const textMailInput = document.getElementById('textMail');
const subjectInput = document.getElementById('subject');
const errorText = document.createElement('small');
const errorTextMail = document.createElement('small');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const mailValue = mailInput.value;
  const textMailValue = textMailInput.value;

  if (mailValue.trim() === '') {
    errorText.classList.add('alertRequiredFields');
    errorText.textContent = 'Este campo é obrigatório';
    mailInput.classList.remove('is-valid');
    mailInput.classList.add('is-invalid');
    mailInput.parentElement.appendChild(errorText);
  } else {
    mailInput.classList.remove('is-invalid');
    mailInput.classList.add('is-valid');
  }

  if (textMailValue.trim() === '') {
    errorTextMail.classList.add('alertRequiredFields');
    errorTextMail.textContent = 'Este campo é obrigatório';
    textMailInput.classList.remove('is-valid');
    textMailInput.classList.add('is-invalid');
    textMailInput.parentElement.appendChild(errorTextMail);
  } else {
    textMailInput.classList.remove('is-invalid');
    textMailInput.classList.add('is-valid');
  }

  if (
    !mailInput.classList.contains('is-invalid') &&
    !textMailInput.classList.contains('is-invalid')
  ) {
    emailjs
      .send('service_fuvjx0o', 'template_712mzfl', {
        mail: mailInput.value,
        to_email: 'ryguimaraes@gmail.com',
        subject: subjectInput.value,
        textMail: textMailInput.value,
      })
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          const successMessage = document.getElementById('sucessMessage');
          successMessage.classList.remove('d-none');
          form.reset();
        },
        function (error) {
          console.log('FAILED...', error);
          const successMessage = document.getElementById('failedMessage');
          successMessage.classList.remove('d-none');
        }
      );
  }
});

mailInput.addEventListener('input', function () {
  errorText.textContent = '';
  mailInput.classList.remove('is-invalid');
  mailInput.classList.remove('is-valid');
});

textMailInput.addEventListener('input', function () {
  errorTextMail.textContent = '';
  textMailInput.classList.remove('is-invalid');
  textMailInput.classList.remove('is-valid');
});
