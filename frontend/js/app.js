document.addEventListener("DOMContentLoaded", function () {

    /* ============================
       CREATE TRIP (index.html)
    ============================ */
    const tripForm = document.getElementById("tripForm");

    if (tripForm) {
        tripForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const tripName = document.getElementById("name").value;
            const startDate = document.getElementById("start").value;
            const endDate = document.getElementById("end").value;
            const budget = document.getElementById("budget").value;

            fetch("http://127.0.0.1:5000/create-trip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: tripName,
                    start: startDate,
                    end: endDate,
                    budget: budget
                })
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("tripName", tripName);
                document.getElementById("message").innerText = data.message;

                // Redirect to dashboard
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 800);
            })
            .catch(err => {
                document.getElementById("message").innerText =
                    "Error connecting to backend";
                console.error(err);
            });
        });
    }

    /* ============================
       DASHBOARD – BUDGET CHECK
    ============================ */
    window.getBudget = function () {
        const tripId = document.getElementById("tripId").value;

        fetch(`http://127.0.0.1:5000/budget/${tripId}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("result").innerHTML = `
                    <p><strong>Total Cost:</strong> ₹${data.total_cost}</p>
                    <p><strong>Remaining Budget:</strong> ₹${data.remaining}</p>
                    <p><strong>Status:</strong> ${data.status}</p>
                `;
            })
            .catch(err => {
                document.getElementById("result").innerText =
                    "Unable to fetch budget details";
                console.error(err);
            });
    };

    /* ============================
       ITINERARY VIEW PAGE
    ============================ */
    const tripNameHeading = document.getElementById("tripName");

    if (tripNameHeading) {
        const name = localStorage.getItem("tripName");
        tripNameHeading.innerText = "Trip: " + (name || "My Trip");
    }

});
