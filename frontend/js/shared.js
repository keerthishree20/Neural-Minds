// Generate public URL
document.addEventListener("DOMContentLoaded", () => {
    const link = window.location.href;
    document.getElementById("shareLink").value = link;
});

// Copy shareable link
function copyLink() {
    const linkInput = document.getElementById("shareLink");
    linkInput.select();
    document.execCommand("copy");
    alert("Shareable link copied!");
}

// Copy trip (demo)
function copyTrip() {
    alert("Trip copied successfully! You can now edit it in your dashboard.");
}
