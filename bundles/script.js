document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
  
    navToggle.addEventListener('click', function () {
      navbar.classList.toggle('show');
    });
  });
  