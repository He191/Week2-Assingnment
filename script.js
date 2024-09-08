// Image data array
let images = [
  {
    src: "https://images.unsplash.com/photo-1455628508298-04cd1c1675f8",
    alt: "a bunch of pigeons fighting for bread"
  },
  {
    src: "https://images.unsplash.com/photo-1486428128344-5413e434ad35",
    alt: "Beautiful Cup Cakes"
  },
  {
    src: "https://images.unsplash.com/photo-1672616128128-ab3edda80c04",
    alt: "London Tower Bridge"
  },
];
// Setting initial image index
let currentIndex = 0;

// Select the containers
const thumbnailContainer = document.getElementById('thumbnails');
const mainImageContainer = document.getElementById('main-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Function to create and display thumbnails
function createThumbnails() {
  images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;

    imgElement.addEventListener('click', function () {
      displayLargeImage(index);
      currentIndex = index
    });

    thumbnailContainer.appendChild(imgElement);
  });
}

// Function to display the large image
function displayLargeImage(index) {
  mainImageContainer.innerHTML = ''; // Clear out any previous image

  const largeImgElement = document.createElement('img');
  largeImgElement.src = images[index].src;
  largeImgElement.alt = images[index].alt;

  mainImageContainer.appendChild(largeImgElement);
}

// Initialize the gallery
createThumbnails();

// Display the first image by default
displayLargeImage(0);

    // Event listener for the "Previous" button
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      displayLargeImage(currentIndex);
    });

    // Event listener for the "Next" button
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      displayLargeImage(currentIndex);
    });

    // Add event listener for arrow key navigation
  document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    displayLargeImage(currentIndex);
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    displayLargeImage(currentIndex);
  }
});