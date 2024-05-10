function redirectToLogin() {
  // Redirect to the login page or perform login actions
  alert("Redirecting to the login page...");
  // You can replace the alert with window.location.href = "login.html" to redirect to a login page
}
function toggleDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
