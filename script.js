

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const servicesToggle = document.querySelector('.services-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Function to show the dropdown
    function showDropdown() {
        dropdownContent.classList.add('show');
        servicesToggle.textContent = 'SERVICES ▲';
        servicesToggle.classList.add("nav-active")
    }
    
    // Function to hide the dropdown
    function hideDropdown() {
        servicesToggle.classList.remove("nav-active")
        dropdownContent.classList.remove('show');
        servicesToggle.textContent = 'SERVICES ▼';
    }

    // Handle desktop (mouseenter and mouseleave)
    function handleDesktopHover() {
        servicesToggle.addEventListener('mouseenter', showDropdown);
        servicesToggle.addEventListener('mouseleave', hideDropdown);
        dropdownContent.addEventListener('mouseenter', showDropdown);
        dropdownContent.addEventListener('mouseleave', hideDropdown);
    }

    // Handle mobile (click toggle)
    function handleMobileClick() {
        servicesToggle.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevents closing immediately when clicking inside
            dropdownContent.classList.toggle('show');
            const isExpanded = dropdownContent.classList.contains('show');
            servicesToggle.textContent = `SERVICES ${isExpanded ? '▲' : '▼'}`;
        });

        // Close the dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!servicesToggle.contains(e.target) && !dropdownContent.contains(e.target)) {
                hideDropdown();
            }
        });
    }

    // Check for screen size and apply appropriate event listeners
    function checkScreenWidth() {
        if (window.innerWidth > 768) {
            // Remove mobile click event and apply desktop hover event
            handleDesktopHover();
        } else {
            // Remove desktop hover event and apply mobile click event
            handleMobileClick();
        }
    }

    // Listen for screen resize and re-apply event listeners if necessary
    window.addEventListener('resize', function () {
        checkScreenWidth();
    });

    // Initial check when the DOM is loaded
    checkScreenWidth();

});

document.addEventListener('DOMContentLoaded', function() {
    // Get current path
    const currentPath = window.location.pathname;
    // Get the filename from the path
    const currentPage = currentPath.split('/').pop();
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get services dropdown links
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    const servicesToggle = document.querySelector('.services-toggle');
    
    // Remove any existing nav-active classes
    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        
        // Get the href and filename from each link
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('/').pop();
        
        // Compare the current page with the link's page
        if (currentPage === linkPage) {
            link.classList.add('nav-active');
        }
        
        // Special case for home page
        if (currentPage === '' && linkHref === '/index.html') {
            link.classList.add('nav-active');
        }
    });
    
    // Check dropdown links and update services toggle color
    dropdownLinks.forEach(link => {
        if (link.getAttribute('href') === './' + currentPage) {
            // Add color to services toggle
            servicesToggle.style.color = '#ff0066';
            
            // Optional: Add active class to the parent dropdown item
            const dropdownParent = link.closest('.services-dropdown');
            if (dropdownParent) {
                dropdownParent.classList.add('nav-active');
            }
        }
    });

    // Debug logging (you can remove this after confirming it works)
    console.log('Current path:', currentPath);
    console.log('Current page:', currentPage);
});


