//Smooth scrolling to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Make 'Scroll to top' visible
scrollFunction = function() {
    let second_section = document.getElementById('second-section').getBoundingClientRect();
    let y = window.scrollY;
    console.log(y);
    if(y > second_section.top) {
        document.getElementById('arrow-up-container').style.width = '32px';
        document.getElementById('arrow-up-container').style.height = '32px';
        document.getElementById('arrow-up-container').style.opacity = '1';
    } else {
        document.getElementById('arrow-up-container').style.width = '0';
        document.getElementById('arrow-up-container').style.height = '0';
        document.getElementById('arrow-up-container').style.opacity = '0';
    }
}
window.addEventListener("scroll", scrollFunction);