// JavaScript code for adding interactivity

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            alert(`You clicked on ${this.textContent}!`);
        });
    });
});