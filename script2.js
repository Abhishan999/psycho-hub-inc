function registerUser() {
  var username = document.getElementsByName('username')[0].value;
  var email = document.getElementsByName('email')[0].value;
  var password = document.getElementsByName('password')[0].value;

  // Validate the input fields
  if (username === '' || email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Perform registration or further actions here
  alert('User registered successfully!');
}
