document.addEventListener("DOMContentLoaded", () => {

    const tripName = localStorage.getItem("tripName");
    document.getElementById("tripName").innerText =
        "Trip: " + (tripName || "My Trip");

    const totalBudget = 50000;
    const estimatedCost = 42000;

    const alertBox = document.getElementById("alert");

    if (estimatedCost > totalBudget) {
        alertBox.innerHTML = "⚠️ Over Budget!";
        alertBox.style.color = "red";
    } else {
        alertBox.innerHTML = "✅ Within Budget";
        alertBox.style.color = "green";
    }
});

function goBack() {
    window.location.href = "dashboard.html";
}
