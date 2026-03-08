// frontend/js/history.js

document.addEventListener("DOMContentLoaded", function () {
    const historyContainer = document.getElementById("historyContainer");

    // Get stored reports from localStorage
    let reports = JSON.parse(localStorage.getItem("diseaseReports")) || [];

    if (reports.length === 0) {
        historyContainer.innerHTML = "<p>No previous reports found.</p>";
        return;
    }

    // Display reports
    reports.forEach(report => {

        const box = document.createElement("div");
        box.classList.add("history-box");

        box.innerHTML = `
            <p><strong>Date:</strong> ${report.date}</p>
            <p><strong>Disease:</strong> ${report.disease}</p>
            <p><strong>Confidence:</strong> ${report.confidence}%</p>
        `;

        historyContainer.appendChild(box);
    });
});