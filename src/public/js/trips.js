

document.addEventListener("DOMContentLoaded", () => {
  const trips = ["Chill Adventure", "Spooky Times", "Desert Madness", "Out in the wild"];
  const tripLinks = document.querySelectorAll(".trip-link");
  const progressBar = document.getElementById("progress-bar");
  const tripContent = document.getElementById("trip-content");

  // Active state update function 
  const setActiveLink = (index) => {
    tripLinks.forEach((btn, i) => {
      if (i === index) {
        btn.classList.remove("text-gray-400");
        btn.classList.add("font-bold", "text-terciary"); 
      } else {
        btn.classList.remove("font-bold", "text-terciary");
        btn.classList.add("text-gray-400");
      }
    });
    
    // Updates the content and progress 
    tripContent.textContent = `Welcome to ${trips[index]}`;
    progressBar.style.width = `${100 / trips.length}%`;
    progressBar.style.left = `${(100 / trips.length) * index}%`;
  };

  // Add event listeners 
  tripLinks.forEach((link, index) => {
    link.addEventListener("click", () => setActiveLink(index));
  });

  // Activate the first link by default
  setActiveLink(0);
});