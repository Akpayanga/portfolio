const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

//the color changer
const texts = ['#A6A6A6', '#D9D9D9', '#5B4131', '#CAFFBA', '#40f109', '#a17a69','#000000']; // Define an array of texts to cycle through
const changeText = (index) => {
    setTimeout(() => {
        const newText = texts[index % texts.length]; // Get the next text from the array
        document.getElementById("newText").style.color = newText;
        changeText(index + 1); // Call changeText again with the next index
    }, 2000); // Change text every 1000 milliseconds (1 second)
};

// Start the text changing process with the first text in the array
changeText(0);