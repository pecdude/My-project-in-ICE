// Get the DOM element for the image carousel
const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel"),
images = document.querySelectorAll(".img"),
buttons = document.querySelectorAll(".button");

let imageIndex =1,
intervalid;
// Define function to strat automatic image slider
const autoslide = () => {
    // Start the slideshow by calling slideImage () every 2 seconds
    intervalid = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoslide function on page load
autoslide();
// A function that updates the carousel display to show the specified image 
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // Update the carousel display to show the specified image
    carousel.style.transform=`translate(-${imageIndex * 100}%)`; 
  };
  // A function that updates the carousel display to show the next or previous image
     const updateClick = (e) =>{
      // Stop the automatic slideshow
      clearInterval(intervalid);
      // Calculate the updated image index based in the button clicked
      imageIndex += e.target.id === "next" ? 1 : -1;
      slideImage(imageIndex);
    console.log(imageIndex);
    autoslide();
};
      // Add event listeners to the navigation buttons
   buttons.forEach((button) => button.addEventListener("click", updateClick));
  // Add mouseover event listener to wrapper element to stop auto sliding
  wrapper.addEventListener("mouseover", () => clearInterval(intervalid));
    // Add mouseover event listener to wrapper element to start auto sliding again
    wrapper.addEventListener("mouseleave", () => autoslide);