document.addEventListener('DOMContentLoaded', () => {
    const doneButtons = document.querySelectorAll('.done-button');
    doneButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Done button clicked!');
        });
    });
});