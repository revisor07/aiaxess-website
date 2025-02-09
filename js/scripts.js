window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

});

// Fade in animation for every page
window.addEventListener('load', (event) => {
  document.body.classList.add('loaded');
});

// Prevent dropdown clickability in desktop view
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');

  function updateDropdownToggle() {
    if (window.innerWidth < 992) { // Your mobile breakpoint
      dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
    } else {
      dropdownToggle.removeAttribute('data-bs-toggle');
    }
  }

  // Initial check on page load
  updateDropdownToggle();

  // Check on window resize
  window.addEventListener('resize', updateDropdownToggle);

    // Bootstrap Dropdown initialization on mobile
    if (window.innerWidth < 992) {
        new bootstrap.Dropdown(dropdownToggle);
    }

});