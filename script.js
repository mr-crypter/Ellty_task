document.addEventListener('DOMContentLoaded', () => {
    const doneButtons = document.querySelectorAll('.done-button');
    const allPagesCheckbox = document.querySelector('.container input[type="checkbox"]');
    const pageCheckboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');

    allPagesCheckbox.addEventListener('change', () => {
        const isChecked = allPagesCheckbox.checked;
        pageCheckboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });

    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(pageCheckboxes).every(checkbox => checkbox.checked);
            allPagesCheckbox.checked = allChecked;
        });
    });

    doneButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Done button clicked!');
        });
    });
});
