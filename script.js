/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {

    navbar.classList.toggle("show");

    const icon = menuButton.querySelector("i");

    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu when link is clicked */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active from all buttons */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        /* Add active to clicked button */

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================
   VIEW ALL PROJECTS
========================================= */

const showProjectsButton =
    document.getElementById("showProjects");

const extraProject =
    document.querySelector(".extra-project");


showProjectsButton.addEventListener("click", function () {

    extraProject.classList.toggle("show");

    if (extraProject.classList.contains("show")) {

        showProjectsButton.innerHTML =
            'Show Less <i class="fa-solid fa-arrow-up"></i>';

    } else {

        showProjectsButton.innerHTML =
            'View All Projects <i class="fa-solid fa-arrow-right"></i>';

    }

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /* Check empty fields */

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "#e83e86";

        return;

    }


    /* Simple email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#e83e86";

        return;

    }


    /* Success message */

    formMessage.textContent =
        "Thank you! Your message is ready to be sent.";

    formMessage.style.color = "#2e9d64";


    /* Clear form */

    contactForm.reset();

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();