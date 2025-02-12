const imageFolder = '/career-center-presentation/images/';
let images = [];
let currentIndex = 0;

// Populate the images array with the list of images in the folder
function loadImages() {
    // Assuming you know the image filenames
    images = [
        // College Corps Pictures
        'collegecorps/midyear1.jpg',
        'collegecorps/midyear2.jpg',

        // CRA Pictures

        // Hancock Hangout Pictures
        'hancockhangout/1.jpg',
        'hancockhangout/2.jpg',
        'hancockhangout/3.jpg',
        'hancockhangout/4.jpg',
        'hancockhangout/5.jpg',
        'hancockhangout/6.jpg',
        'hancockhangout/7.jpg',
        'hancockhangout/8.jpg',
        'hancockhangout/9.jpg',
        'hancockhangout/10.jpg',
        'hancockhangout/11.jpg',
        'hancockhangout/12.jpg',
        'hancockhangout/13.jpg',
        'hancockhangout/14.jpg',
        'hancockhangout/15.jpg',
        'hancockhangout/16.jpg',
        'hancockhangout/17.jpg',
        'hancockhangout/18.jpg',
        'hancockhangout/19.jpg',
        'hancockhangout/20.jpg',
        'hancockhangout/21.jpg',
        'hancockhangout/22.jpg',
        'hancockhangout/23.jpg',
        'hancockhangout/24.jpg',
        'hancockhangout/25.jpg',
        'hancockhangout/26.jpg',
        'hancockhangout/27.jpg',
        'hancockhangout/28.jpg',
        'hancockhangout/29.jpg',
        'hancockhangout/30.jpg',
        'hancockhangout/31.jpg',
        'hancockhangout/32.jpg',
        'hancockhangout/33.jpg',
        'hancockhangout/34.jpg',
        'hancockhangout/35.jpg',
        'hancockhangout/36.jpg',
        'hancockhangout/37.jpg',
        'hancockhangout/38.jpg',
        'hancockhangout/39.jpg',
        'hancockhangout/40.jpg',
        'hancockhangout/41.jpg',


        // SkillsUSA Pictures
        'skillsusa/skillsusagrad-1.jpg',
        'skillsusa/skillsusagrad-2.jpg',
        'skillsusa/skillsusagrad-3.jpg',
        'skillsusa/skillsusagrad-4.jpg',
        'skillsusa/skillsusagrad-5.jpg',
        'skillsusa/skillsusagrad-6.jpg',
        'skillsusa/skillsusagrad-7.jpg',
        'skillsusa/skillsusagrad-8.jpg',
        'skillsusa/skillsusagrad-9.jpg',
        'skillsusa/skillsusagrad-10.jpg',
        'skillsusa/skillsusagrad-11.jpg',
        'skillsusa/skillsusagrad-12.jpg',
        'skillsusa/skillsusagrad-13.jpg',
        'skillsusa/skillsusagrad-14.jpg',
        'skillsusa/skillsusagrad-15.jpg',
        'skillsusa/skillsusagrad-16.jpg',
        'skillsusa/skillsusagrad-17.jpg',
        'skillsusa/skillsusagrad-18.jpg',
        'skillsusa/skillsusagrad-19.jpg',
        'skillsusa/skillsusagrad-20.jpg',
        'skillsusa/skillsusagrad-21.jpg',
        'skillsusa/skillsusagrad-31.jpg',
        'skillsusa/skillsusagrad-32.jpg',
        'skillsusa/skillsusagrad-33.jpg',
        'skillsusa/skillsusagrad-34.jpg',
        'skillsusa/skillsusagrad-35.jpg',
        'skillsusa/skillsusagrad-36.jpg',
        'skillsusa/skillsusagrad-37.jpg',
        'skillsusa/skillsusagrad-38.jpg',
        'skillsusa/skillsusagrad-39.jpg',
        'skillsusa/skillsusagrad-40.jpg',
        'skillsusa/skillsusagrad-41.jpg',





        // Career Expo Pictures
        'careerexpo/1.jpg',
        'careerexpo/2.jpg',
        'careerexpo/3.jpg',
        'careerexpo/4.jpg',
        'careerexpo/5.jpg',
        'careerexpo/6.jpg',
        'careerexpo/7.jpg',
        'careerexpo/8.jpg',
        'careerexpo/9.jpg',
        'careerexpo/10.jpg',
        'careerexpo/11.jpg',
        'careerexpo/12.jpg',
        'careerexpo/13.jpg',
        'careerexpo/14.jpg',
        'careerexpo/15.jpg',
        'careerexpo/16.jpg',
        'careerexpo/17.jpg',
        'careerexpo/18.jpg',
        'careerexpo/19.jpg',
        'careerexpo/20.jpg',
        'careerexpo/21.jpg',
        'careerexpo/22.jpg',
        'careerexpo/23.jpg',
        'careerexpo/24.jpg',
        'careerexpo/25.jpg',
        'careerexpo/26.jpg',
        'careerexpo/27.jpg',
        'careerexpo/28.jpg',
        'careerexpo/29.jpg',
        'careerexpo/30.jpg',
        'careerexpo/31.jpg',
        'careerexpo/32.jpg',
        'careerexpo/33.jpg',
        'careerexpo/34.jpg',
        'careerexpo/35.jpg',
        'careerexpo/36.jpg',
        'careerexpo/37.jpg',
        'careerexpo/38.jpg',
        'careerexpo/39.jpg',
        'careerexpo/40.jpg',
        'careerexpo/41.jpg',
        'careerexpo/42.jpg',
        'careerexpo/43.jpg',
        'careerexpo/44.jpg',
        'careerexpo/45.jpg',
        'careerexpo/46.jpg',
        'careerexpo/47.jpg',
        'careerexpo/48.jpg',
        'careerexpo/49.jpg',
        'careerexpo/50.jpg',
        'careerexpo/51.jpg',
        'careerexpo/52.jpg',
        'careerexpo/53.jpg',
        'careerexpo/54.jpg',
        'careerexpo/55.jpg',
        'careerexpo/56.jpg',
        'careerexpo/57.jpg',
        'careerexpo/58.jpg',
        'careerexpo/59.jpg',
        'careerexpo/60.jpg',
        'careerexpo/61.jpg',
        'careerexpo/62.jpg',
        'careerexpo/63.jpg',
        'careerexpo/64.jpg',
        'careerexpo/65.jpg',
        'careerexpo/66.jpg',
        'careerexpo/67.jpg',
        'careerexpo/68.jpg',
        'careerexpo/69.jpg',
        'careerexpo/70.jpg',
        'careerexpo/71.jpg',
        'careerexpo/72.jpg',
        'careerexpo/73.jpg',
        'careerexpo/74.jpg',
        'careerexpo/75.jpg',
        'careerexpo/76.jpg',
        'careerexpo/77.jpg',
        'careerexpo/78.jpg',
        'careerexpo/79.jpg',
        'careerexpo/80.jpg',
        'careerexpo/81.jpg',
        'careerexpo/82.jpg',
        'careerexpo/83.jpg',
        'careerexpo/84.jpg',
        'careerexpo/85.jpg',
        'careerexpo/86.jpg',
        'careerexpo/87.jpg',
        'careerexpo/88.jpg',
        'careerexpo/89.jpg',
        'careerexpo/90.jpg',
        'careerexpo/91.jpg',
        'careerexpo/92.jpg',
        'careerexpo/93.jpg',
        'careerexpo/94.jpg',
        'careerexpo/95.jpg',
        'careerexpo/96.jpg',
        'careerexpo/97.jpg',
        'careerexpo/98.jpg',
        'careerexpo/99.jpg',
        'careerexpo/100.jpg',
        'careerexpo/101.jpg',
        'careerexpo/102.jpg',
        'careerexpo/103.jpg',
        'careerexpo/104.jpg',
        'careerexpo/105.jpg',
        'careerexpo/106.jpg',
        'careerexpo/107.jpg',
        'careerexpo/108.jpg',
        'careerexpo/109.jpg',
        'careerexpo/110.jpg',
        'careerexpo/111.jpg',
        'careerexpo/112.jpg',
        'careerexpo/113.jpg',
        'careerexpo/114.jpg',
        'careerexpo/115.jpg',
        'careerexpo/116.jpg',
        'careerexpo/117.jpg',
        'careerexpo/118.jpg',
        'careerexpo/119.jpg',
        'careerexpo/120.jpg',
        'careerexpo/121.jpg',
        'careerexpo/122.jpg',
        'careerexpo/123.jpg',
        'careerexpo/124.jpg',
        'careerexpo/125.jpg',
        'careerexpo/127.jpg',
        'careerexpo/128.jpg',
        'careerexpo/129.jpg',
        'careerexpo/130.jpg',
        'careerexpo/131.jpg',
        'careerexpo/132.jpg',
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