document.getElementById('toggleButton').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.sidebar-nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor behavior (direct jump)
            e.preventDefault();

            // Remove active class from all navigation items
            navLinks.forEach(link => {
                link.parentElement.classList.remove('active');
            });

            // Add active class to the clicked navigation item
            e.currentTarget.parentElement.classList.add('active');

            // Get the target section ID from the href attribute
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smoothly scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling
                    block: 'start' // Align the top of the section with the top of the viewport
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.querySelector(".close-btn");
    const emergencyCard = document.querySelector(".emergency-contact");

    closeBtn.addEventListener("click", () => {
        emergencyCard.style.display = "none";
    });
});