function goToDashboard() {
    window.location.href = "dashboard.html";
}

// Fetch all trips
fetch("http://127.0.0.1:5000/trips")
    .then(res => res.json())
    .then(trips => {
        const container = document.getElementById("tripContainer");
        container.innerHTML = "";

        if (trips.length === 0) {
            container.innerHTML = "<p>No trips created yet.</p>";
            return;
        }

        trips.forEach(trip => {
            const card = document.createElement("div");
            card.className = "trip-card";

            card.innerHTML = `
                <h3>${trip.name}</h3>
                <p><b>Dates:</b> ${trip.start_date} → ${trip.end_date}</p>
                <p><b>Budget:</b> ₹${trip.budget}</p>

                <button onclick="viewTrip(${trip.id})">View</button>
                <button onclick="deleteTrip(${trip.id})">Delete</button>
            `;

            container.appendChild(card);
        });
    });

function viewTrip(id) {
    window.location.href = `dashboard.html?tripId=${id}`;
}

function deleteTrip(id) {
    if (!confirm("Delete this trip?")) return;

    fetch(`http://127.0.0.1:5000/trip/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        alert("Trip deleted");
        location.reload();
    });
}
