// frontend/js/upload.js
const leafImage = document.getElementById("leafImage");
const preview = document.getElementById("preview");
const uploadForm = document.getElementById("uploadForm");
const message = document.getElementById("message");

leafImage.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

uploadForm.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!leafImage.files[0]) {
        message.textContent = "Please select an image.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Image uploaded successfully (frontend test).";
    message.style.color = "green";

    // Temporary redirect
    setTimeout(() => {
        window.location.href = "result.html";
    }, 1000);
});