// frontend/js/login.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (email === "" || password === "") {
        message.textContent = "Please fill all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Frontend login validated successfully.";
    message.style.color = "green";

    // Temporary redirect for frontend testing
    window.location.href = "dashboard.html";
});