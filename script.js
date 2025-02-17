// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('nav-menu-active'); // Add or remove the 'nav-menu-active' class
}

// Add event listener to the hamburger icon
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to filter projects based on category
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block'; // Show the project
        } else {
            card.style.display = 'none'; // Hide the project
        }
    });
}

// Add event listeners for filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function () {
        filterProjects(this.dataset.category); // Pass the category from button data
    });
});

// Function to display image in a modal (lightbox effect)
function openLightbox(src) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const img = document.createElement('img');
    img.src = src;
    modal.appendChild(img);

    // Close modal when clicked
    modal.addEventListener('click', () => {
        modal.remove();
    });

    document.body.appendChild(modal); // Add modal to the body
}

// Add event listeners to all images in the gallery
document.querySelectorAll('#gallery img').forEach(image => {
    image.addEventListener('click', function () {
        openLightbox(this.src); // Pass image source to the lightbox function
    });
});

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const submitButton = document.querySelector('#contact button');

    // Check if all fields are filled
    if (name && email && message) {
        submitButton.disabled = false; // Enable submit button
    } else {
        submitButton.disabled = true; // Disable submit button
    }
}

// Add event listeners for input changes
document.getElementById('name').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('message').addEventListener('input', validateForm);
