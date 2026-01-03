// Demo itinerary data (hackathon-friendly)
const itineraryData = [
    {
        city: "Goa",
        day: "Day 1",
        activities: [
            { name: "Beach Visit", time: "10:00 AM", cost: 0 },
            { name: "Seafood Lunch", time: "1:00 PM", cost: 800 }
        ]
    },
    {
        city: "Goa",
        day: "Day 2",
        activities: [
            { name: "Water Sports", time: "11:00 AM", cost: 1500 }
        ]
    },
    {
        city: "Kerala",
        day: "Day 3",
        activities: [
            { name: "Backwater Ride", time: "9:00 AM", cost: 1200 }
        ]
    }
];

function showList() {
    const container = document.getElementById("itinerary");
    container.innerHTML = "";

    itineraryData.forEach(day => {
        const card = document.createElement("div");
        card.className = "trip-card";

        card.innerHTML = `
            <h3>${day.day} – ${day.city}</h3>
            <ul>
                ${day.activities.map(a =>
                    `<li>${a.time} | ${a.name} – ₹${a.cost}</li>`
                ).join("")}
            </ul>
        `;

        container.appendChild(card);
    });
}

function showTimeline() {
    const container = document.getElementById("itinerary");
    container.innerHTML = "";

    itineraryData.forEach(day => {
        const block = document.createElement("div");
        block.className = "timeline-block";

        block.innerHTML = `
            <h4>${day.day}</h4>
            <p><b>${day.city}</b></p>
            ${day.activities.map(a =>
                `<div class="activity">
                    ${a.time} – ${a.name} (₹${a.cost})
                </div>`
            ).join("")}
        `;

        container.appendChild(block);
    });
}

function goBack() {
    window.location.href = "dashboard.html";
}

// Default view
showList();
