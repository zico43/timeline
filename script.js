// JavaScript functionality will be added here as needed

// Example: Add active class to current navigation item
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.style.backgroundColor = '#555';
        }
    });
});