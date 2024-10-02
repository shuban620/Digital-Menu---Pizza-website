document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        
        const allSections = document.querySelectorAll('.section');

        allSections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSections = button.getAttribute('data-target');

        if (targetSections) {
            targetSections.split(',').forEach(sectionId => {
                document.getElementById('section-' + sectionId).classList.add('active');
            });
        }
    });
});
