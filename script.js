// Simple script for any future interactivity.
// Currently, the page is fully static and doesn't require complex JS.

document.addEventListener('DOMContentLoaded', () => {
    console.log('DeStar landing page loaded.');
    
    // Example: Animate the needle on load
    const needle = document.querySelector('.needle');
    if (needle) {
        needle.style.transform = 'translateX(-50%) rotate(-90deg)';
        setTimeout(() => {
            needle.style.transition = 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)';
            needle.style.transform = 'translateX(-50%) rotate(45deg)';
        }, 300);
    }
});
