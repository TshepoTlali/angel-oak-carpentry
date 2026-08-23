console.log("Angel Oak Carpentry website loaded");

document.addEventListener("DOMContentLoaded", () => {

    const galleryCarousel = document.querySelector("#galleryCarousel");

    if (galleryCarousel) {
        new bootstrap.Carousel(galleryCarousel, {
            interval: 3000,
            ride: "carousel",
            pause: "hover"
        });
    }

    // Close mobile navigation after clicking a link
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {
                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }

        });
    });

});