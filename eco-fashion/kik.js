let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toogle('active', window.scrollY > 1)
