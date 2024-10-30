document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#alice-container img');
  let currentIndex = 0;

  function showNextImage() {
    if (currentIndex > 0) {
      images[currentIndex - 1].style.opacity = '0'; // Hide previous image
    }
    images[currentIndex].style.opacity = '1'; // Show current image
    currentIndex = (currentIndex + 1) % images.length; // Move to next image or loop back to start
  }

  setInterval(showNextImage, 2000); // Change image every 2 seconds
});
