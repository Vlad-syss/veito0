//HEADER SECTION ========================================================================================================================================================================
//HEADER burger ========================================================================================================================================================================
let menu = document.querySelector(".header__burger");
let navigation = document.querySelector(".header__nav");

menu.addEventListener("click", (event) => {

    event.preventDefault();

    menu.classList.toggle("active");
    navigation.classList.toggle("active");
    document.body.classList.toggle("lock");

})
//HEADER remove burger ========================================================================================================================================================================

function removeMenu() {

    menu.classList.remove("active");
    navigation.classList.remove("active");
    document.body.classList.remove("lock");
}
//HEADER scroll effect ========================================================================================================================================================================
window.addEventListener('scroll', function() {

    let header = document.querySelector(".header-header");
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop; 

    if (scrollPosition >= 70) {

        navigation.classList.add('scroll');
        header.classList.add('scroll');

    } else {

        navigation.classList.remove('scroll');
        header.classList.remove('scroll');
    }
  });

//HEADER background effect ========================================================================================================================================================================
let images = [
    "img/header_back1.png",
    "img/header_back.png",
    "img/header_back1.png",
];

let element = document.getElementById("header");
element.style.transition = "background-image 0.5s ease-in-out";

let currentImageIndex = 0;

function changeBackgroundImage() {
    let nextImage = images[currentImageIndex];

    element.style.opacity = "0";

        element.style.backgroundImage = "url('" + nextImage + "')";
        element.style.opacity = "1";

    currentImageIndex++;

    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
    }
}
  
setInterval(changeBackgroundImage, 5000);
//Arrow scroll to block ========================================================================================================================================================================
function setScroll(top){
    const arrow = document.querySelector(".pluses");
    arrow.scrollIntoView({
        block:"start",
        behavior:"smooth",
    })
}