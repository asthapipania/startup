// script.js

document.getElementById("sellOnline").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("onlineForm").style.display = "block";
    document.getElementById("pickupInfo").style.display = "none"; // Hide pickup info if it's already displayed
});

document.getElementById("addressForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var address = document.getElementById("address").value;
    // Display pickup information
    document.getElementById("pickupInfo").style.display = "block";
    document.getElementById("onlineForm").style.display = "none"; // Hide address form
});
