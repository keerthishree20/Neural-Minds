const activities = [
    {
        name: "Beach Visit",
        city: "Goa",
        type: "Sightseeing",
        cost: "Low",
        duration: "2 hrs",
        desc: "Relax and enjoy the beach"
    },
    {
        name: "Seafood Tour",
        city: "Goa",
        type: "Food",
        cost: "Medium",
        duration: "3 hrs",
        desc: "Taste local seafood delicacies"
    },
    {
        name: "Water Sports",
        city: "Goa",
        type: "Adventure",
        cost: "High",
        duration: "4 hrs",
        desc: "Jet ski, parasailing & more"
    },
    {
        name: "Backwater Ride",
        city: "Kerala",
        type: "Sightseeing",
        cost: "Medium",
        duration: "2 hrs",
        desc: "Scenic boat ride"
    }
];

function filterActivities() {
    const type = document.getElementById("typeFilter").value;
    const cost = document.getElementById("costFilter").value;

    const list = document.getElementById("activityList");
    list.innerHTML = "";

    const filtered = activities.filter(act => {
        return (type === "" || act.type === type) &&
               (cost === "" || act.cost === cost);
    });

    filtered.forEach(act => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${act.name}</h3>
            <p>City: ${act.city}</p>
            <p>Type: ${act.type}</p>
            <p>Cost: ${act.cost}</p>
            <p>Duration: ${act.duration}</p>
            <p>${act.desc}</p>
            <button onclick="addActivity('${act.name}')">Add</button>
        `;
        list.appendChild(div);
    });
}

function addActivity(activityName) {
    let tripActivities = JSON.parse(localStorage.getItem("tripActivities")) || [];
    tripActivities.push(activityName);
    localStorage.setItem("tripActivities", JSON.stringify(tripActivities));
    alert(activityName + " added to trip!");
}

function goBack() {
    window.location.href = "dashboard.html";
}

// Load all activities initially
filterActivities();
