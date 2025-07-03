document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const parent = toggle.closest('.dropdown');
      const allDropdowns = document.querySelectorAll('.dropdown');

      // Close all others
      allDropdowns.forEach(d => {
        if (d !== parent) d.classList.remove('open');
      });

      // Toggle current
      parent.classList.toggle('open');
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a, .auth-buttons a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent document click from firing immediately
      // Remove active from all
      navLinks.forEach(l => l.classList.remove('active-link'));
      // Add to the clicked one
      link.classList.add('active-link');
    });
  });

  // Remove active state when clicking anywhere else
  document.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active-link'));
  });
});


function toggleMobileNav() {
  const sidebar = document.getElementById('mobileSidebar');
  sidebar.classList.toggle('show');     // Slide in/out
  sidebar.classList.toggle('hidden');   // For visibility control
}

// Mobile dropdown inside sidebar
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.mobile-dropdown');
      parent.classList.toggle('open');
    });
  });
});
