document.addEventListener("DOMContentLoaded", function () {
  // Get the menu link and the dropdown
  var menuLink = document.querySelector(".menu");
  var dropdown = document.getElementById("menu-dropdown");

  // Add event listener to the menu link
  menuLink.addEventListener("click", function (event) {
    // Prevent the default action (scrolling)
    event.preventDefault();

    // Toggle the dropdown visibility
    dropdown.style.display =
      dropdown.style.display === "none" ? "block" : "none";
  });
  window.addEventListener("click", function (event) {
    // Check if the click was outside the menu
    if (!event.target.closest(".menu")) {
      // Close the dropdown if it's open
      dropdown.style.display = "none";
    }
  });
});


// automatic slider

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3) {
    counter = 1;
  }
}, 3000)
  