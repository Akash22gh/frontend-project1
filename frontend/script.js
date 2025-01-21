document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate a successful login (Replace this logic with server-side validation)
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful! Redirecting to homepage...");
        window.location.href = "home.html"; // Redirect to the homepage
    } else {
        alert("Invalid credentials. Please try again.");
    }
});