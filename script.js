// script.js

// Function to toggle visibility of budget sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.budget-section h2');
    
    sections.forEach(section => {
        section.style.cursor = 'pointer';
        section.addEventListener('click', () => {
            const content = section.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Initially collapse all sections
    const contentLists = document.querySelectorAll('.budget-section ul');
    contentLists.forEach(list => list.style.display = 'none');

    // Back to Top Button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = "⬆ Back to Top";
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#2E8B57';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    backToTopButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';

    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
