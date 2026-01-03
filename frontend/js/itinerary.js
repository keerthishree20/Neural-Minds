let stops = [];

function addStop() {
    const city = document.getElementById("city").value;
    const from = document.getElementById("fromDate").value;
    const to = document.getElementById("toDate").value;

    if (!city || !from || !to) {
        alert("Please fill all fields");
        return;
    }

    stops.push({
        city,
        from,
        to,
        activities: []
    });

    renderStops();
}

function addActivity(index) {
    const activity = prompt("Enter activity:");
    if (activity) {
        stops[index].activities.push(activity);
        renderStops();
    }
}

function moveUp(index) {
    if (index === 0) return;
    [stops[index - 1], stops[index]] = [stops[index], stops[index - 1]];
    renderStops();
}

function renderStops() {
    const container = document.getElementById("stops");
    container.innerHTML = "";

    stops.forEach((stop, i) => {
        const div = document.createElement("div");
        div.className = "trip-card";

        div.innerHTML = `
            <h4>${stop.city}</h4>
            <p>${stop.from} → ${stop.to}</p>

            <b>Activities:</b>
            <ul>
                ${stop.activities.map(a => `<li>${a}</li>`).join("")}
            </ul>

            <button onclick="addActivity(${i})">➕ Add Activity</button>
            <button onclick="moveUp(${i})">⬆ Move Up</button>
        `;

        container.appendChild(div);
    });
}

function goBack() {
    window.location.href = "dashboard.html";
}
