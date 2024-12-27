// Dark Mode Toggle Button and Icon
const darkModeToggle = document.getElementById("darkModeToggle");
const modeIcon = document.getElementById("modeIcon");

// Check for saved theme preference on page load
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
    }
});

// Toggle Dark Mode on Button Click
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Update Icon
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark"); // Save preference
    } else {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light"); // Save preference
    }
});


// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "flex"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
};



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav_menu_list a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active-link class from all links
            navLinks.forEach(link => link.classList.remove("active-link"));

            // Add active-link class to the clicked link
            this.classList.add("active-link");
        });
    });
});
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Close the menu on clicking a menu item
document.querySelectorAll(".nav_menu_list a").forEach(link => {
    link.addEventListener("click", function () {
        var menuBtn = document.getElementById("myNavMenu");
        if (menuBtn.className.includes("responsive")) {
            menuBtn.className = "nav-menu"; // Close the menu
        }
    });
});
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- TYPING EFFECT ----- */
document.addEventListener("DOMContentLoaded", function () {
    // Typing effect initialization
    var typingEffect = new Typed(".typedText", {
        strings: ["Frontend Developer", "C++ Developer", "Desktop Application Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
});

// JavaScript to handle navigation and show/hide sections
document.addEventListener("DOMContentLoaded", function () {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active-link'));

            // Add active class to clicked link
            this.classList.add('active-link');

            // Get the target section id from href attribute
            const targetId = this.getAttribute('href').substring(1);

            // Scroll to the target section
            const targetSection = document.getElementById(targetId);

            // Scroll behavior
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form visibility handling for Contact and Projects
    const contactLink = document.querySelector('a[href="#contact"]');
    const projectsLink = document.querySelector('a[href="#projects"]');

    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('form[action="https://api.web3forms.com/submit"]').scrollIntoView({ behavior: 'smooth' });
    });

    projectsLink.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
});
// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        const skillValue = bar.getAttribute("data-skill");
        bar.style.width = skillValue; // Animate the width based on the data-skill value
    });
});


//Hire Me Button Function
function openEmail() {
    const subject = "Job Opportunity"; // Email subject
    const body = "Hi, I would like to discuss a job opportunity with you."; // Pre-filled email body
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
//Download CV Button Function
document.getElementById('downloadCvBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
});

//Redirect to github projects function
function redirectToGitHub(repoName) {
    let url;
    switch (repoName) {
        case 'GPA':
            url = "https://github.com/AbdulHannan-HAH/GPA_Calculator-in-C-.git";
            break;
        case 'UAMS':
            url = "https://github.com/AbdulHannan-HAH/University-Admission-Management-System-in-C-";
            break;
        case 'PACMAN':
            url = "https://github.com/AbdulHannan-HAH/Pacman-Game-in-C-.git";
            break;
        case 'PBMS':
            url = "https://github.com/AbdulHannan-HAH/Phonebook-Management-System-in-Cpp";
            break;
        case 'SAMS':
            url = "https://github.com/AbdulHannan-HAH/Sports_Academy_Management_System-Desktop-Application-";
            break;
        case 'SSG':
            url = "https://github.com/AbdulHannan-HAH/Space_Shoter_Game__C_sharp";
            break;
        default:
            console.error('Invalid repository name');
            return;
    }
    window.open(url, '_blank');
}






