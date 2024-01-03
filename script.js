const rainbowBox = document.getElementById('rainbowBox');

// let hue = 0;
//let speed = 0; // Adjust speed here (higher values for faster animation)
//function animateRainbow() {
//hue = (hue + speed) % 360;
//rainbowBox.style.borderImage = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${(hue + 60) % 360}, 100%, 50%), hsl(${(hue + 120) % 360}, 100%, 50%), hsl(${(hue + 180) % 360}, 100%, 50%), hsl(${(hue + 240) % 360}, 100%, 50%), hsl(${(hue + 300) % 360}, 100%, 50%)) 1`;
//requestAnimationFrame(animateRainbow);
//}

//animateRainbow();

//



// slideshow firstpage
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0; // Set all slides to transparent initially
    slides[i].style.transition = "opacity 1s ease-in-out"; // Apply a smooth transition
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) { 
    slideIndex = 1; // Reset index if it exceeds the number of slides
  }

  slides[slideIndex - 1].style.opacity = 1; // Display the current slide
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}


// Wait for the page to load
window.addEventListener('load', function() {
  // Get the elements for text and the line animation
  var slogan = document.querySelector('.slogan-text');
  var line = document.querySelector('.solid-line3');

  // Set initial opacity to 0 (hidden)
  slogan.style.opacity = '0';

  // Use setTimeout to delay the animation for the line and text
  setTimeout(function() {
    // Fade in the text by changing opacity gradually
    var opacity = 0;
    var textTimer = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(textTimer); // Stop the animation when opacity reaches 1
      }
      slogan.style.opacity = opacity;
      opacity += 0.01; // Adjust the increment value for speed
    }, 10); // Adjust the interval for smoothness

    // Extend the line animation
    var width = 0;
    var lineTimer = setInterval(function() {
      if (width >= 100) {
        clearInterval(lineTimer); // Stop the animation when line reaches 100%
      }
      line.style.width = width + '%'; // Extend the line
      width += 1; // Adjust the increment value for speed
    }, 10); // Adjust the interval for smoothness
  }, 2000); // Delay the animation for 1000 milliseconds (1 second)
});


// Wait for the page to load
window.addEventListener('load', function() {
  // Get the element for the title
  var title = document.querySelector('.Title-Slideshow');

  // Set initial opacity to 0 (hidden)
  title.style.opacity = '0';

  // Use setTimeout to delay the animation for the title
  setTimeout(function() {
    // Fade in the title by changing opacity gradually
    var opacity = 0;
    var titleTimer = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(titleTimer); // Stop the animation when opacity reaches 1
      }
      title.style.opacity = opacity;
      opacity += 0.01; // Adjust the increment value for speed
    }, 10); // Adjust the interval for smoothness
  }, 1200); // Delay the animation for 1000 milliseconds (1 second)
});


// Wait for the page to load
window.addEventListener('load', function() {
  // Get the element for the Title-Slideshow-Box
  var titleBox = document.querySelector('.Title-Slideshow-Box');

  // Set initial opacity to 0 (hidden)
  titleBox.style.opacity = '0';

  // Use setTimeout to delay the animation for the Title-Slideshow-Box
  setTimeout(function() {
    // Fade in the Title-Slideshow-Box by changing opacity gradually
    var opacity = 0;
    var titleBoxTimer = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(titleBoxTimer); // Stop the animation when opacity reaches 1
      }
      titleBox.style.opacity = opacity;
      opacity += 0.01; // Adjust the increment value for speed
    }, 10); // Adjust the interval for smoothness
  }, 500); // Delay the animation for 2000 milliseconds (2 seconds)
});

