function goBack() {
    window.location.href = "dashboard.html";
}

/* =========================
   DEMO ITINERARY DATA
   (Later can come from backend)
========================= */

const itinerary = [
    {
        day: "Day 1",
        city: "Goa",
        activities: [
            { time: "10:00 AM", name: "Beach Visit", cost: 0 },
            { time: "1:00 PM", name: "Seafood Lunch", cost: 800 }
        ]
    },
    {
        day: "Day 2",
        city: "Goa",
        activities: [
            { time: "11:00 AM", name: "Water Sports", cost: 1500 }
        ]
    },
    {
        day: "Day 3",
        city: "Kerala",
        activities: [
            { time: "9:00 AM", name: "Backwater Ride", cost: 1200 }
        ]
    }
];

const timelineDiv = document.getElementById("timeline");

itinerary.forEach(day => {
    const dayBlock = document.createElement("div");
    dayBlock.className = "day-block";

    let activitiesHTML = "";
    day.activities.forEach(act => {
        activitiesHTML += `
            <div class="activity">
                <span>${act.time}</span>
                <span>${act.name}</span>
                <span>₹${act.cost}</span>
            </div>
        `;
    });

    dayBlock.innerHTML = `
        <h3>${day.day} – ${day.city}</h3>
        ${activitiesHTML}
    `;

    timelineDiv.appendChild(dayBlock);
});
