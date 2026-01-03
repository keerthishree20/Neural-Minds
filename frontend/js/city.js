const cities = [
    { name: "Goa", country: "India", cost: "Low", popularity: "⭐⭐⭐⭐" },
    { name: "Kerala", country: "India", cost: "Medium", popularity: "⭐⭐⭐⭐⭐" },
    { name: "Jaipur", country: "India", cost: "Low", popularity: "⭐⭐⭐" },
    { name: "Paris", country: "France", cost: "High", popularity: "⭐⭐⭐⭐⭐" },
    { name: "Amsterdam", country: "Netherlands", cost: "High", popularity: "⭐⭐⭐⭐" }
];

function searchCity() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const list = document.getElementById("cityList");
    list.innerHTML = "";

    const filtered = cities.filter(city =>
        city.name.toLowerCase().includes(input)
    );

    filtered.forEach(city => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${city.name}</h3>
            <p>Country: ${city.country}</p>
            <p>Cost Index: ${city.cost}</p>
            <p>Popularity: ${city.popularity}</p>
            <button onclick="addCity('${city.name}')">Add to Trip</button>
        `;
        list.appendChild(div);
    });
}

function addCity(cityName) {
    let tripCities = JSON.parse(localStorage.getItem("tripCities")) || [];
    tripCities.push(cityName);
    localStorage.setItem("tripCities", JSON.stringify(tripCities));
    alert(cityName + " added to trip!");
}

function goBack() {
    window.location.href = "dashboard.html";
}
