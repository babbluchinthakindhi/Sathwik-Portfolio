/* ===========================
   TYPING EFFECT
=========================== */

const roles = [
    "AI & Machine Learning Engineer",
    "Full Stack Developer",
    "Python Developer",
    "IoT Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

    }

    let speed = isDeleting ? 50 : 100;

    /* Pause after completing the word */

    if (
        !isDeleting &&
        charIndex === currentRole.length + 1
    ) {

        speed = 1500;

        isDeleting = true;
    }

    /* Move to next role */

    if (
        isDeleting &&
        charIndex === 0
    ) {

        isDeleting = false;

        roleIndex =
            (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}


/* ===========================
   START TYPING EFFECT
=========================== */

document.addEventListener(
    "DOMContentLoaded",
    typeEffect
);


/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

function revealSections() {

    const reveals =
        document.querySelectorAll(".reveal");

    reveals.forEach((section) => {

        const windowHeight =
            window.innerHeight;

        const sectionTop =
            section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            sectionTop <
            windowHeight - revealPoint
        ) {

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* ===========================
   ACTIVE NAVBAR SECTION
=========================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navLinks =
            document.querySelectorAll(
                ".nav-links a"
            );

        const sections =
            document.querySelectorAll(
                "section[id]"
            );
        const resumeBox =
            document.querySelector(
                ".resume-box");


        /* ===========================
           NAVBAR CLICK
        =========================== */

        navLinks.forEach((link) => {

            link.addEventListener(
                "click",
                function () {

                    navLinks.forEach((item) => {

                        item.classList.remove(
                            "active"
                        );

                    });

                    this.classList.add(
                        "active"
                    );

                }
            );

        });


        /* ===========================
           ACTIVE SECTION ON SCROLL
        =========================== */

        function updateActiveNav() {

            let currentSection = "";

            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop - 180;

                const sectionBottom =
                    sectionTop +
                    section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionBottom
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach((link) => {

                link.classList.remove(
                    "active"
                );

                const target =
                    link.getAttribute("href");

                if (
                    target ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });
            /* ===========================
                RESUME BUTTON VISIBILITY
            =========================== */

            if (resumeBox) {

                if (
                    currentSection === "hero" ||
                    currentSection === "contact"
                    ) {

                resumeBox.classList.remove("hidden");

                } else {

                    resumeBox.classList.add("hidden");

                    }

            }

        }
        


        window.addEventListener(
            "scroll",
            updateActiveNav
        );

        updateActiveNav();

    }
);
/* ===========================
AUTO HIDE SUCCESS MESSAGE
=========================== */

const alertBox = document.querySelector(".alert");

if(alertBox){

    setTimeout(function(){

        alertBox.style.opacity = "0";
        alertBox.style.transform = "translateX(40px)";

        setTimeout(function(){

            alertBox.remove();

        },300);

    },3000);

}
/* ===========================
MOBILE MENU
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navBox = document.querySelector(".nav-links-box");

if(menuToggle){

    menuToggle.onclick = () =>{

        navBox.classList.toggle("active");

        menuToggle.innerHTML =
        navBox.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    };

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.onclick = ()=>{

            navBox.classList.remove("active");

            menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        };

    });

}