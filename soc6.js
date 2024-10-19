// soc6.js

// Function to run when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Social Studies Class 6!");
});

// Function to open the video in full screen
function openVideo() {
    const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID"; // Replace with your video ID
    const newWindow = window.open(videoUrl, '_blank');
    newWindow.focus();
    newWindow.document.body.style.margin = "0";
    newWindow.document.body.innerHTML = `
        <iframe 
            src="${videoUrl}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            style="width: 100vw; height: 100vh; border: none;">
        </iframe>`;
}