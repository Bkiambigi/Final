function scrollToContact() {
    const contactAnchor = document.getElementById('contact-anchor');
    contactAnchor.scrollIntoView({ behavior: 'smooth' });
  }
  
  const applyNowButtons = document.querySelectorAll('.apply-now-button');
  applyNowButtons.forEach(button => {
    button.addEventListener('click', scrollToContact);
  });