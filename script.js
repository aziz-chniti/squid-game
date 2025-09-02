document.querySelectorAll('.toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
        document.querySelector('.side-bar').classList.toggle('active');
        document.querySelector('.fa-bars').classList.toggle('active');
    });
});