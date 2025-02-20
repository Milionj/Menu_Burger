// Je sélectionne et je stocke
const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');

// J'associe l'icône à l'action au clic
burgerIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');      // Bascule l'affichage du menu
    burgerIcon.classList.toggle('active');      // Rotation de l'icône
});
