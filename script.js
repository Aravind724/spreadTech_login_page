document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Add input validation here, e.g., checking for valid username and password format
  
      // In a real application, you would hash the password on the server-side before storing it in a database
  
      // For the sake of this example, we'll just log the username and password
      console.log(Username, $[username])
      console.log(Password, $[password])
    });
  });
  

