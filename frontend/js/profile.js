// Load saved profile (if exists)
window.onload = () => {
    const name = localStorage.getItem("username");
    const photo = localStorage.getItem("userphoto");

    if (name) document.getElementById("username").value = name;
    if (photo) document.getElementById("preview").src = photo;
};

// Save profile
function saveProfile() {
    const name = document.getElementById("username").value;
    const file = document.getElementById("photo").files[0];

    if (!name) {
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("username", name);

    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            localStorage.setItem("userphoto", reader.result);
            alert("Profile saved successfully!");
        };
        reader.readAsDataURL(file);
    } else {
        alert("Profile saved successfully!");
    }
}
