const filterLinks = document.querySelectorAll(".filter-link");
filterLinks.forEach(link => {
  if(link.href === window.location.href) {
    link.setAttribute('aria-current', 'status');
  }
})