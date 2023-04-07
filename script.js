// Get login form and close button
const loginForm = document.querySelector('.login-form');
const closeButton = document.querySelector('#close-login-form');

// Open login form on button click
document.querySelector('#login-btn').addEventListener('click', () => {
  loginForm.style.display = 'block';
});

// Close login form on button click
closeButton.addEventListener('click', () => {
  loginForm.style.display = 'none';
});

// Submit login form
document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submit action

  // Get email and password input values
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Validate email and password
  if (email === '') {
    alert('Please enter your email.');
  } else if (password === '') {
    alert('Please enter your password.');
  } else {
    // Perform login logic here
    console.log(`Logged in with email: ${email} and password: ${password}`);
  }
});
