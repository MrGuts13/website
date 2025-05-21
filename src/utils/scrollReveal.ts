export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        revealElements[i].classList.add('active');
      } else {
        revealElements[i].classList.remove('active');
      }
    }
  };
  
  window.addEventListener('scroll', reveal);
  
  // To check the scroll position on page load
  reveal();
};