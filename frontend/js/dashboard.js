/* =========================
   NAVIGATION
========================= */
function goToCreateTrip() {
    window.location.href = "index.html";
}

function goToProfile() {
    window.location.href = "profile.html";
}

function goToTimeline() {
    window.location.href = "timeline.html";
}

function goToSharedItinerary() {
    window.location.href = "shared_itinerary.html";
}

/* =========================
   DEMO TRIPS (Hackathon)
========================= */
const trips = [
    { id: 1, name: "My First Trip" },
    { id: 2, name: "Vacation Plan" }
];

const tripList = document.getElementById("tripList");

if (tripList) {
    tripList.innerHTML = "";

    trips.forEach(trip => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${trip.name}
            <button onclick="viewBudget(${trip.id})">
                View Budget
            </button>
        `;
        tripList.appendChild(li);
    });
}

/* =========================
   CHECK BUDGET (Budget Highlights)
========================= */
function getBudget() {
    const tripIdInput = document.getElementById("tripId");
    const resultBox = document.getElementById("result");

    if (!tripIdInput || !resultBox) return;

    const tripId = tripIdInput.value;

    if (!tripId) {
        alert("Please enter Trip ID");
        return;
    }

    fetch(`http://127.0.0.1:5000/budget/${tripId}`)
        .then(res => res.json())
        .then(data => {
            resultBox.innerHTML = `
                <p><b>Total Cost:</b> ₹${data.total_cost}</p>
                <p><b>Remaining Budget:</b> ₹${data.remaining_budget}</p>
                <p><b>Status:</b> ${data.status}</p>
            `;
        })
        .catch(() => {
            resultBox.innerHTML =
                "<p style='color:red'>Error connecting to backend</p>";
        });
}

/* =========================
   VIEW BUDGET (Recent Trips)
========================= */
function viewBudget(tripId) {
    const budgetBox = document.getElementById("budgetBox");
    if (!budgetBox) return;

    fetch(`http://127.0.0.1:5000/budget/${tripId}`)
        .then(res => res.json())
        .then(data => {
            budgetBox.innerHTML = `
                <p><b>Total Cost:</b> ₹${data.total_cost}</p>
                <p><b>Remaining Budget:</b> ₹${data.remaining_budget}</p>
                <p><b>Status:</b> ${data.status}</p>
            `;
        })
        .catch(() => {
            budgetBox.innerHTML =
                "<p style='color:red'>Error loading budget</p>";
        });
}
/* =========================
   PROFILE NAVIGATION
========================= */
function openProfile() {
    window.location.href = "profile.html";
}
