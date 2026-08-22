/*====================================
 VSMART Consultant Engineering
 Main JavaScript
=====================================*/


// Navbar shadow when scrolling

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("sticky-nav");

    }
    else{

        navbar.classList.remove("sticky-nav");

    }

});



// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});



// Counter Animation

const counters = document.querySelectorAll(".counter h2");


counters.forEach(counter => {


    let target = +counter.innerText.replace("+","");

    let count = 0;


    let updateCounter = () => {


        let increment = target / 100;


        if(count < target){

            count += increment;

            counter.innerText =
            Math.ceil(count) + "+";

            setTimeout(updateCounter,20);

        }
        else{

            counter.innerText =
            target + "+";

        }

    };


    updateCounter();


});




// Contact form message

const form = document.querySelector("form");


if(form){


form.addEventListener("submit",function(e){


    e.preventDefault();


    alert(
    "Thank you for contacting VSMART Consultant Engineering. We will contact you soon."
    );


    form.reset();


});


}



// Mobile menu close after click


const navLinks = document.querySelectorAll(".nav-link");

const menuToggle =
document.querySelector(".navbar-toggler");


navLinks.forEach(function(link){


    link.addEventListener("click",function(){


        if(menuToggle){

            menuToggle.click();

        }


    });


});