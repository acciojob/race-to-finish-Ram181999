window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

// Function to generate a random delay between min and max seconds
function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min * 1000;
}

// Create an array of promises with random delays
const promises = Array.from({ length: 5 }, (_, i) => {
  const delay = getRandomDelay(1, 5);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${delay / 1000} seconds`);
    }, delay);
  });
});

// Use Promise.any to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    // Print the result to the "output" div
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });

