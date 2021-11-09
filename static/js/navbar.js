const navbarButton = document.getElementById('show-navbar-button');
const navbar = document.getElementById('hide-navbar');

navbarButton.addEventListener('click', () => {
    switch(navbarButton.id) {
        case 'show-navbar-button':
            navbarButton.innerHTML = '&times;';
            navbarButton.id = 'hide-navbar-button';
            navbar.id = 'show-navbar';
            break;
        case 'hide-navbar-button':
            navbarButton.innerHTML = '&#9776';
            navbarButton.id = 'show-navbar-button';
            navbar.id = 'hide-navbar';
            break;
    }
})