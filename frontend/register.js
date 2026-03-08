// frontend/js/register.js

document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");
    const message = document.getElementById("message");

    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        message.textContent = "";

        // check empty fields
        if (!name || !email || !password || !confirmPassword) {
            message.textContent = "Please fill all fields";
            message.style.color = "red";
            return;
        }

        // check password match
        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match";
            message.style.color = "red";
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                message.textContent = data.message;
                message.style.color = "green";

                // reset form
                registerForm.reset();

                // redirect to login page
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1500);

            } else {
                message.textContent = data.message || "Registration failed";
                message.style.color = "red";
            }

        } catch (error) {
            console.error("Register error:", error);
            message.textContent = "Unable to connect to server";
            message.style.color = "red";
        }
    });

});