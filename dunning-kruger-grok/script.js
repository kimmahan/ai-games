// script.js
// Add simple hover effect for the points
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('circle');
    circles.forEach(circle => {
        circle.addEventListener('mouseover', () => {
            circle.setAttribute('r', '8');
        });
        circle.addEventListener('mouseout', () => {
            circle.setAttribute('r', '5');
        });
    });
});