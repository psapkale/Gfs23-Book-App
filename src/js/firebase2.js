import { Notify } from 'notiflix';
import { closeModal } from './modalSignUp';
import refs from './refs';
import LsService from './storage-methods';

const form = document.querySelector('.registration-form');
const nameInput = form.querySelector('.registration-form__input[type="text"]');
const emailInput = form.querySelector(
  '.registration-form__input[type="email"]'
);
const passwordInput = form.querySelector(
  '.registration-form__input[type="password"]'
);
const loginForm = document.querySelector('.login-form');
const logoutBtn = document.querySelector('[data-log-out]');
const mobileLogoutBtn = document.querySelector('.mobile__logout');

// Function to register a new user
function signUp() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!name || !email || !password) {
    Notify.failure('All fields are required!');
    return;
  }

  const userData = { displayName: name, email: email, password: password };
  localStorage.setItem('user', JSON.stringify(userData));

  Notify.success('You have successfully registered!');
  closeModal();
  updateUI();
}

// Function to log in an existing user
function login() {
  const email = loginForm.querySelector('[data-login-email]').value.trim();
  const password = loginForm.querySelector('[data-login-pass]').value;

  if (!email || !password) {
    Notify.failure('All fields are required!');
    return;
  }

  const storedUserData = JSON.parse(localStorage.getItem('user'));

  if (
    storedUserData &&
    storedUserData.email === email &&
    storedUserData.password === password
  ) {
    Notify.success('Authorization was successful!');
    updateUI();
    closeModal();
  } else {
    Notify.failure('Invalid email or password!');
  }
}

// Function to log out the user
function logout() {
  localStorage.removeItem('user');
  Notify.success('You have successfully logged out!');
  updateUI();
}

// Function to update the UI based on user authentication state
function updateUI() {
  const userData = JSON.parse(localStorage.getItem('user'));

  if (userData) {
    document.querySelector('.user__name').textContent = userData.displayName;
    document.querySelector('.sign-up-btn').classList.add('hidden');
    document.querySelector('.user-sign').classList.add('show');
    document.querySelector('.user__container').classList.remove('hidden');
    document.querySelector('.mobile__logout').classList.remove('hidden');
  } else {
    document.querySelector('.sign-up-btn').classList.remove('hidden');
    document.querySelector('.user-sign').classList.remove('show');
    document.querySelector('.user__container').classList.add('hidden');
    document.querySelector('.mobile__logout').classList.add('hidden');
  }
}

// Event listeners for form submissions and logout
form.addEventListener('submit', e => {
  e.preventDefault();
  signUp();
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  login();
});

logoutBtn.addEventListener('click', logout);
mobileLogoutBtn.addEventListener('click', logout);

// Check for existing user data on page load
window.addEventListener('load', updateUI);
