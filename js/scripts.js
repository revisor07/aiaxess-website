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

// auto scroll for chatbot interaction
const deepChat = document.getElementById('deepChatId');
if (deepChat) {
    const scrollToBottom = () => {
        const offset = 100; //pixels
        window.scrollTo({
            top: deepChat.offsetTop + deepChat.offsetHeight - window.innerHeight + offset,
            behavior: 'smooth'
        });
    };

    deepChat.addEventListener('response', scrollToBottom);
    deepChat.addEventListener('message', scrollToBottom);
}