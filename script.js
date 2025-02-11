const imageFolder = '/career-center-presentation/images/';
let images = [];
let currentIndex = 0;

// Populate the images array with the list of images in the folder
function loadImages() {
    // Assuming you know the image filenames
    images = [
        'collegecorpsmidyear1.jpg',
        'collegecorpsmidyear2.jpg',
    ];

    shuffleImages();
    showNextImage();
}

// Shuffle the images in random order
function shuffleImages() {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]]; // Swap elements
    }
}

// Display the next image in the shuffled array
function showNextImage() {
    const imageElement = document.getElementById('slideshow');
    imageElement.style.opacity = 0;

    setTimeout(()=>{
        imageElement.src = `${imageFolder}${images[currentIndex]}`;
        currentIndex = (currentIndex + 1) % images.length;

        setTimeout(()=>{
            imageElement.style.opacity = 1;
        }, 50);
    }, 1000);

    setTimeout(showNextImage, 3000); // Change image every 3 seconds
}

window.onload = loadImages;