 // Slideshow functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let slideInterval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
      });
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentSlide = index;
    }

    function nextSlide() {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }

    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideshow() {
      clearInterval(slideInterval);
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopSlideshow();
        showSlide(index);
        startSlideshow();
      });
    });

    startSlideshow();

    // Pause slideshow on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', stopSlideshow);
    hero.addEventListener('mouseleave', startSlideshow);

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (menuToggle) {
      menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('show');
      });
    }
    (function() {
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');
      const dropdowns = document.querySelectorAll('.dropdown');
      
      // Toggle mobile menu
      if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
          e.stopPropagation();
          navLinks.classList.toggle('show');
        });
      }

      // Handle dropdown icon clicks (for all devices)
      dropdowns.forEach(function(dropdown) {
        const iconButton = dropdown.querySelector('.dropdown-icon');
        
        if (iconButton) {
          iconButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(function(d) {
              if (d !== dropdown) {
                d.classList.remove('active');
              }
            });
            
            // Toggle this dropdown
            dropdown.classList.toggle('active');
          });
        }
      });

      // Close dropdowns when clicking outside
      document.addEventListener('click', function(e) {
        // Check if click is inside any dropdown
        let clickedInsideDropdown = false;
        
        dropdowns.forEach(function(dropdown) {
          if (dropdown.contains(e.target)) {
            clickedInsideDropdown = true;
          }
        });
        
        // If click is outside all dropdowns and not on menu toggle, close all
        if (!clickedInsideDropdown && !menuToggle?.contains(e.target)) {
          dropdowns.forEach(function(d) {
            d.classList.remove('active');
          });
        }
      });

      // Prevent clicks inside dropdown content from closing it
      document.querySelectorAll('.dropdown-content').forEach(function(content) {
        content.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      });

      // Remove any hover effects that might show dropdown
      dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function(e) {
          // Do nothing - hover disabled
          e.stopPropagation();
        });
      });
// Form submission
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your message! We will get back to you soon.');
          this.reset();
        });
      }

    })();
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'flex';
      }
    });

    
  