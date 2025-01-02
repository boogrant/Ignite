// Navbar Toggle Script
const toggleButton = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
})