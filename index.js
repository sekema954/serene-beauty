
//testimony
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.show-test');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const pageIndicator = document.querySelector('.current-review');
    let currentIndex = 0;
    
    // Show initial testimonial (test1)
    testimonials[currentIndex].classList.add('active-test');

    // Function to show the current testimonial
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active-test', 'test-animation');
        });

        testimonials[index].classList.add('active-test', 'test-animation');
        pageIndicator.textContent = index + 1; // Update page indicator

        // Remove the animation class after animation completes
        setTimeout(() => {
            testimonials[index].classList.remove('test-animation');
        }, 1000); // Adjust this timeout based on your CSS animation duration
    }

    // Next button click event
    nextBtn.addEventListener('click', function() {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
            showTestimonial(currentIndex);
        }
    });

    // Previous button click event
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showTestimonial(currentIndex);
        }
    });
});



menubarClicked();
function menubarClicked(){
    const menuBar = document.querySelector('.menu-bar');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownWrapper = document.querySelector('.dropdown-wrapper');
    menuBar.addEventListener('click', ()=>{
        menuBar.classList.toggle('change');
        dropdownMenu.classList.toggle('change-dropdown-size');
        dropdownWrapper.classList.toggle('show-dropdown-links');
    });
}

navbarFixed();
function navbarFixed(){
    window.addEventListener('scroll', ()=>{
        const navbar = document.querySelector('.navbar');
        if(window.scrollY >= 50) {
            navbar.classList.add('position-fixed');
        } else {
            navbar.classList.remove('position-fixed');
        }
    });
};

//log out btn
logOut();
function logOut(){
    const logOutBtn = document.querySelector('.log-out-btn');
    logOutBtn.addEventListener('click', ()=>{
        const logoutWrapper = document.querySelector('.log-off');
        logoutWrapper.classList.toggle('log-off-show')
    });
}

logOutClicked();
function logOutClicked(){
    const logoffBtn = document.querySelector('.log-off-btn');
    logoffBtn.addEventListener('click',()=>{
        const LoginDiv = document.querySelector('.user');
        const loginBtn = document.querySelector('.logout-hide');
        LoginDiv.classList.add('logout-hide');
        logoffBtn.classList.add('logout-hide');
        loginBtn.classList.remove('logout-hide');
        

    })
}



//carousel
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider');
    const radios = document.querySelectorAll('.radio-wrapper input');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentIndex = 0;
    const slideCount = slides.length;

    function activateRadio(index) {
        radios.forEach((radio, idx) => {
            radio.checked = (idx === index);
        });
    }

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active-carousel');
        });
        slides[index].classList.add('active-carousel');
        activateRadio(index);
    }

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    });

    setInterval(function() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }, 2000);

    showSlide(currentIndex);
});



