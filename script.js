function toggleAccordion(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling; // The button is right before the content
    const icon = button.querySelector('.icon-arrow');

    // Check if currently active
    const isActive = content.classList.contains('active');

    // Close all other accordions (Optional - remove this block if you want multiple open at once)
    document.querySelectorAll('.accordion-content').forEach(el => {
        el.style.maxHeight = null;
        el.classList.remove('active');
        // Reset icons
        if(el.previousElementSibling) {
            const elIcon = el.previousElementSibling.querySelector('.icon-arrow');
            if(elIcon) elIcon.classList.remove('rotate-180');
        }
    });

    if (!isActive) {
        // Open the clicked one
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        if(icon) icon.classList.add('rotate-180');
    } 
    // If it was active, the "Close all" block above already closed it.
}
