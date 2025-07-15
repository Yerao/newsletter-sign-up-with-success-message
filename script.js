const form = document.querySelector('form');
// pages
const containerInput = document.getElementById('container-input');
const containerResult = document.getElementById('container-result');
// buttons
const submitBtn = document.getElementById('submit-btn');
const dismissBtn = document.getElementById('dismiss-msg');
// messages
const errorMessage = document.getElementById('error-message');
const emailMessage = document.getElementById('user-email');
// email input
const emailInput = document.getElementById('email-input');

// validate email function
function validateEmail(email) {
  if (!email) {
    return 'email is required!';
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email)) {
    return 'Valid email is required!';
  }

  return '';
}

// switch page
function switchPage() {
  containerInput.classList.toggle('hidden');
  containerResult.classList.toggle('hidden');
  console.log(1);
}

// on submit function
function handleSubmit(e) {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const emailValue = emailInput.value;

  const emailVlidationMessage = validateEmail(emailValue);
  errorMessage.innerText = emailVlidationMessage;

  if (emailVlidationMessage !== '') {
    emailInput.classList.add('error');
    return;
  } else {
    emailInput.classList.remove('error');
    emailMessage.innerText = emailValue;
    switchPage();
  }
}

// reset input's error when changed
emailInput.addEventListener('input', function () {
  if (emailInput.classList.contains('error')) {
    emailInput.classList.remove('error');
  }
});

form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', switchPage);
