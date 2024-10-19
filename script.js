// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Redirect to YouTube when the small image is clicked
document.getElementById('youtube-link').addEventListener('click', function() {
    window.location.href = 'https://youtu.be/EKSzjpL9uYY?si=dtxJfrg1F6kn656B';
    

});

// Controls for manually navigating slides
function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
