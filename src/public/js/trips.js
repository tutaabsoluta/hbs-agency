document.addEventListener("DOMContentLoaded", () => {
  const trips = window.trips;
  const tripLinks = document.querySelectorAll(".trip-link");
  const progressBar = document.getElementById("progress-bar");
  const tripContent = document.getElementById("trip-content");
  const tripHeading = document.getElementById("trip-heading");
  const tripImg = document.getElementById("trip-img");

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

    const trip = trips[index];
    tripContent.textContent = trip.description;
    tripHeading.textContent = trip.title;
    tripImg.src = trip.imgUrl;
    tripImg.alt = trip.title;

    progressBar.style.width = `${100 / trips.length}%`;
    progressBar.style.left = `${(100 / trips.length) * index}%`;
  };

  tripLinks.forEach((link, index) => {
    link.addEventListener("click", () => setActiveLink(index));
  });

  setActiveLink(0); // mostrar el primer viaje al cargar
});
