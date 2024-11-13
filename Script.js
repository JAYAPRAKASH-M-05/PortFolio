///////////// Home typing ////////////////////////////////
const typed = new Typed(".typing",{
    strings : ["Web developer","Web Designer","Java Programmer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});

//////////////// skill circle///////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = " ";
    var rotate = 360 / dots;


    for(let i = 0;i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked');

    }
});

////////////////////////hidden functions /////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Function to hide all sections
    function hideAllSections() {
        const sections = document.querySelectorAll('.mainsec > div');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Function to show a specific section
    function showSection(sectionId) {
        hideAllSections();
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    // Initially hide all sections except home
    hideAllSections();
    showSection('home');

    // Add click event listeners to sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('onclick').split("'")[1];
            showSection(sectionId);
        });
    });
});

/////////////////////////////////////////////////////


//document.addEventListener('DOMContentLoaded', function() {
  //  const sr = ScrollReveal({
    //    duration: 1000,
    //    reset: true,
    //    easing: 'ease-in-out',
    //    scale: 1,
    //    viewFactor: 0.5
    // });

//    sr.reveal('.home-info', { delay: 200 });
//    sr.reveal('.profile-img', { delay: 400 });
//    sr.reveal('.about-container', { delay: 200 });
//    sr.reveal('.about-img', { delay: 400 });
//    sr.reveal('.skills .skills', { delay: 200, interval: 300 });
//    sr.reveal('.professional .box', { delay: 200, interval: 300 });
//    sr.reveal('.project-boxes', { delay: 200 });
//    sr.reveal('.contact-info', { delay: 200 });
//    sr.reveal('.contact-img', { delay: 400 });
//});
