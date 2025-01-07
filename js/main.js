// Get the dropdown button and content
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown_menu');

// Toggle the dropdown menu when the button is clicked
dropdownButton.addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation(); // Prevent event from bubbling up
  dropdownContent.classList.toggle('show'); // Toggle visibility of dropdown
});

// Close the dropdown if the user clicks anywhere outside the button and dropdown menu
window.addEventListener('click', function(event) {
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.classList.remove('show'); // Close the dropdown
  }
});