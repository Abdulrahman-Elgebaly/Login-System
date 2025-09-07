const logEmail = document.getElementById('logEmail');
const logPass = document.getElementById('logPass');
const loginBtn = document.getElementById('login');
const emailAlert = document.getElementById('emailAlert');
const message = document.getElementById('message');

let user = JSON.parse(localStorage.getItem('user')) || [];

function showMessage(text) {
  message.classList.remove('d-none');
  message.innerHTML = `<p class="text-center">${text}</p>`;
}

function hideMessage() {
  message.classList.add('d-none');
  message.innerHTML = '';
}

function userEmailValidation() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(logEmail.value) && logEmail.value !== '') {
    logEmail.classList.add('is-valid');
    logEmail.classList.remove('is-invalid');
    emailAlert.classList.add('d-none');
    return true;
  } else {
    logEmail.classList.add('is-invalid');
    emailAlert.classList.remove('d-none');
    emailAlert.innerHTML =
      'Please enter a valid email address (example: name@example.com)';
    return false;
  }
}

function handlePasswordInput() {
  if (logPass.value !== '') {
    hideMessage();
  }
}

function checkUser() {
  for (let i = 0; i < user.length; i++) {
    if (
      logEmail.value.toLowerCase() === user[i].email.toLowerCase() &&
      logPass.value === user[i].password
    ) {
      let userName = user[i].name;
      localStorage.setItem('userName', userName);
      location.href = 'home.html';
      return;
    }
  }
  showMessage('Incorrect email or password');
}

function handleLogin() {
  if (logEmail.value === '' || logPass.value === '') {
    showMessage('All inputs are required');
    return;
  }

  if (!userEmailValidation()) {
    return;
  }

  checkUser();
}

loginBtn.addEventListener('click', handleLogin);

document.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    handleLogin();
  }
});

logEmail.addEventListener('input', userEmailValidation);
logPass.addEventListener('input', handlePasswordInput);
