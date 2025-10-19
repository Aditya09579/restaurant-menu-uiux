// Smooth scroll to menu function
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Add click event listeners to nav links for smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});