// const form = document.getElementById('login-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   fetch('/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ username, password })
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       window.location.href = '/dashboard';
//     } else {
//       alert(data.message);
//     }
//   })
//   .catch(error => console.error(error));
// });
