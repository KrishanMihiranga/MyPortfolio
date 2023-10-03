
            var cursorDot = document.querySelector("[data-cursor-dot]")
            var cursorOutline = document.querySelector("[data-cursor-outline]")
            var blur = document.querySelector("#cursor-blur")
            window.addEventListener("mousemove", function(e){
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                // blur.style.left = `${posX - 200}px`;
                // blur.style.top = `${posY - 200}px`;
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, {duration:500, fill: "forwards"});
                blur.animate({
                    left: `${posX - 200}px`,
                    top: `${posY - 200}px`
                }, {duration:500, fill: "forwards"});
            })
            
        
            VanillaTilt.init(document.querySelector(".serv-box"), {
		    max: 15,
		    speed: 400,
            glare: true,
	        });

            VanillaTilt.init(document.querySelector(".serv-box2"), {
		    max: 15,
		    speed: 400,
            glare: true,
	        });

            VanillaTilt.init(document.querySelector(".serv-box3"), {
		    max: 15,
		    speed: 400,
            glare: true,
	        });

            var typed = new Typed(".multiple-text", {
                strings: ["Web Developer", "Full-stack Developer", "Student", "UI/UX Designer"],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true
            })

            var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");

            function opentab(tabname){
                for(tablink of tablinks){
                tablink.classList.remove("active-link");
                }
             for(tabcontent of tabcontents){
               tabcontent.classList.remove("active-tab");
             }
             event.currentTarget.classList.add("active-link");
             document.getElementById(tabname).classList.add("active-tab");
             }
            var swiper = new Swiper(".mySwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });

            var loader = document.getElementById('preloader');

            window.addEventListener("load", function(){
                setTimeout(function() {
                    loader.style.display = "none";
                }, 3000); 
            });
            


    // window.addEventListener('scroll', reveal);

    // function reveal() {
    //     var reveals = document.querySelectorAll('.reveal');
    //     var windowheight = window.innerHeight;
    //     var revealpoint = 150;

    //     for (var i = 0; i < reveals.length; i++) {
    //         var revealtop = reveals[i].getBoundingClientRect().top;

    //         if (revealtop < windowheight - revealpoint) {
    //             reveals[i].classList.add('r-active');
    //         } else {
    //             reveals[i].classList.remove('r-active');
    //         }
    //     }
    // }

    // window.addEventListener('scroll', funcrevealLeft);

    // function funcrevealLeft() {
    //     var revealLefts = document.querySelectorAll('.reveal-left');
    //     var windowWidth = window.innerWidth;
    //     var revealPoint = 150;

    //     for (var i = 0; i < revealLefts.length; i++) {
    //         var revealLeft = revealLefts[i].getBoundingClientRect().left;

    //         if (revealLeft < windowWidth - revealPoint) {
    //             revealLefts[i].classList.add('r-left-active');
    //         } else {
    //             revealLefts[i].classList.remove('r-left-active');
    //         }
    //     }
    // }

    ScrollReveal({
         reset: true,
         distance: '100px',
         duration: 2000,
         delay: 0 
    });
    ScrollReveal().reveal('.center-subtopic');
    ScrollReveal().reveal('.center-desc', { delay: 500 });
    ScrollReveal().reveal('.bottom');
    ScrollReveal().reveal('.left', { origin: 'left', distance: '250px' });
    ScrollReveal().reveal('.left2', { origin: 'left', delay: 500, distance: '250px' });
    ScrollReveal().reveal('.left3', { origin: 'left',delay: 600 , distance: '250px' });
    ScrollReveal().reveal('.right', { origin: 'right'});
    ScrollReveal().reveal('.right-delay', { origin: 'right', delay: 500});
    ScrollReveal().reveal('.sc-container');
    ScrollReveal().reveal('#testimonial-right-div');
    ScrollReveal().reveal('#a-card');
    