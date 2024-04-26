let slideIndex = 1;

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Initialize the slideshow
showSlides(slideIndex);
// Function to open the "Sell Offline" option
function openSellOffline() {
    document.getElementById("homePlace").style.display = "block";
}

// Function to open the "Sell Online" option
function openSellOnline() {
    // Implement functionality for selling online
}

// Function to find nearby Entique stores based on home place
function findNearbyStores() {
    var homePlace = document.getElementById("homePlaceSelect").value;
    // Implement logic to find nearby stores based on home place
    alert("Finding nearby stores for: " + homePlace);
}

