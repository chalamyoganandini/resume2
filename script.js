/* =====================================
   FLOATING PARTICLES
===================================== */

const particleBox = document.getElementById("particles");

if (particleBox) {

    for (let i = 0; i < 55; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (7 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            (-Math.random() * 15) + "s";

        particle.style.opacity =
            0.2 + Math.random() * 0.7;

        particleBox.appendChild(particle);
    }
}


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });


/* =====================================
   3D PROFILE CARD
===================================== */

const scene =
    document.getElementById("scene");

const profileCard =
    document.getElementById("profileCard");


if (scene && profileCard) {

    scene.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                scene.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width - 0.5;

            const y =
                (event.clientY - rect.top)
                / rect.height - 0.5;

            profileCard.style.transform =
                `translate(-50%, -50%)
                 rotateX(${y * -18 + 10}deg)
                 rotateY(${x * 22 - 15}deg)`;

        }
    );


    scene.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "translate(-50%, -50%) rotateX(10deg) rotateY(-15deg)";

        }
    );

}


/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {

    const navLinks =
        document.querySelector(".navlinks");

    if (!navLinks) return;


    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.position = "absolute";

        navLinks.style.top = "65px";

        navLinks.style.left = "0";

        navLinks.style.right = "0";

        navLinks.style.padding = "18px";

        navLinks.style.flexDirection = "column";

        navLinks.style.background =
            "rgba(7, 8, 18, 0.95)";

        navLinks.style.borderRadius =
            "18px";

        navLinks.style.backdropFilter =
            "blur(20px)";
    }
}


/* =====================================
   CLOSE MOBILE MENU
===================================== */

document
    .querySelectorAll(".navlinks a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (window.innerWidth <= 800) {

                    document
                        .querySelector(".navlinks")
                        .style.display = "none";

                }

            }
        );

    });


/* =====================================
   DYNAMIC YEAR
===================================== */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================
   3D CARD TILT
===================================== */

const cards =
    document.querySelectorAll(".glass");


cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 18;

            const rotateY =
                (centerX - x) / 18;


            card.style.transform =
                `perspective(700px)
                 translateY(-8px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =====================================
   BUTTON RIPPLE EFFECT
===================================== */

document
    .querySelectorAll(".btn")
    .forEach((button) => {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                ripple.className = "ripple";

                ripple.style.left =
                    event.offsetX + "px";

                ripple.style.top =
                    event.offsetY + "px";


                this.appendChild(ripple);


                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".navlinks a");


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });


        navItems.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =====================================
   PAGE LOADED
===================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add("loaded");

    }
);


/* =====================================
   MOUSE PARALLAX BACKGROUND
===================================== */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 20;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 20;

        const orb =
            document.querySelector(".orb");

        if (orb) {

            orb.style.marginLeft =
                x + "px";

            orb.style.marginTop =
                y + "px";

        }

    }
);