// // const hamMenu =document.querySelector('.ham-menu');
// // const hiddenMenu=document.querySelector('.off-screen-menu');
// // hamMeun.addEventListener('click',()=>{
// //     hamMeun.classList.toggle('active');
// //     hiddenMeun.classList.toggle('active');
// // })


// // List of image URLs (Replace with your images)
// const images = [
//     "image1.jpg",
//     "image2.jpg",
//     "image3.jpg"
// ];

// let currentIndex = 0;

// // Function to update the image source
// function updateImage() {
//     const imgElement = document.getElementById("slideshow-image");
//     imgElement.src = images[currentIndex];
// }

// // Show the next image
// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImage();
// }

// // Show the previous image
// function previousImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateImage();
// }

// // Auto-slide every 5 seconds
// setInterval(nextImage,
 // Set the launch date
// const launchDate = new Date("2025-01-10T00:00:00").getTime();

// function updateCountdown() {
//   const now = new Date().getTime();
//   const timeLeft = launchDate - now;

//   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   document.getElementById("days").innerText = days.toString().padStart(2, "0");
//   document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
//   document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
//   document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
// }

// // Update the countdown every second
// setInterval(updateCountdown, 1000);
// updateCountdown();
