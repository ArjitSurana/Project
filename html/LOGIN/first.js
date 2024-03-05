function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

// Perform your authentication logic here (e.g., check against a predefined username and password)
    if (email === "a@2004" && password === "hehe") {
// Redirect to a new page or perform other actions upon successful login
        alert("Login successful!");
        window.location.href = "http://127.0.0.1:5500/LOGIN/Beauty.html";
    } else {
// Display an error message for unsuccessful login
        document.getElementById("errorMessage").innerHTML = "Invalid username or password.";
    }
}
