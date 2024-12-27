//nav list to open from hamburger
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-list li");

navToggle.addEventListener("click", function () {
  if (navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navList.style.display = "none";
  });
});

//Toggler
let toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
let logo = document.querySelector(".logo");
toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    logo.src = "./images/PortfolioLogo/logoWhitebg.jpg";
  } else {
    logo.src = "./images/PortfolioLogo/logoBlackbg.jpg";
  }
});
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
});

//search button part to filter based on category

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#searchInput");
  const searchButton = document.querySelector(".search-btn");

  const gridItems = document.querySelectorAll(".grid-items");

  function filterItems() {
    const filterText = searchInput.value.toLowerCase();

    gridItems.forEach((item) => {
      const categoryText = item
        .querySelector(".project-category")
        .textContent.toLowerCase();

      // helps search based on any word in description
      const projectDesc = item
        .querySelector(".grid-text")
        .textContent.toLowerCase();
      if (
        categoryText.includes(filterText) ||
        projectDesc.includes(filterText)
      ) {
        item.style.display = "grid";
      } else {
        item.style.display = "none";
      }
    });
  }

  searchButton.addEventListener("click", function () {
    filterItems();
  });
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      filterItems();
    }
  });
});

//validating form
const name = document.getElementById("name");
const email = document.getElementById("mail");
const msg = document.getElementById("msg");
const cbtn = document.querySelector(".contact-btn");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");

const msgCounter = document.getElementById("msg-counter");

const submitted = document.getElementById("submitted-form");
cbtn.addEventListener("click", function (e) {
  msg.innerText = "";
  msg.textContent = "";
  nameError.textContent = "";
  emailError.textContent = "";
  msgError.textContent = "";
  submitted.textContent = "";
  let isValid = true;

  // Validate Name
  const namePattern = /^[A-Za-z\s]+$/;
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameError.style.display = "block";
    name.style.borderColor = "red";
    isValid = false;
  } else if (!namePattern.test(name.value.trim())) {
    nameError.textContent = "Name should contain only alphabets.";
    nameError.style.display = "block";
    name.style.borderColor = "red";
    isValid = false;
  } else if (name.value.trim().length < 2) {
    nameError.textContent = "Name should contain at least 2 letters.";
    nameError.style.display = "block";
    name.style.borderColor = "red";
    isValid = false;
  } else {
    nameError.style.display = "none";
    name.style.borderColor = "rgb(13, 189, 13)";
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailError.style.display = "block";
    email.style.borderColor = "red";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    email.style.borderColor = "red";
    isValid = false;
  } else {
    emailError.style.display = "none";
    email.style.borderColor = "rgb(13, 189, 13)";
  }

  // Validate Message
  if (msg.value.trim() === "") {
    msgError.textContent = "Message is required.";
    msgError.style.display = "block";
    msg.style.borderColor = "red";
    isValid = false;
  } else if (msg.value.trim().length < 30) {
    msgError.textContent = "Message should be at least 30 characters.";
    msgError.style.display = "block";
    msg.style.borderColor = "red";
    isValid = false;
  } else {
    msgError.style.display = "none";
    msg.style.borderColor = "rgb(13, 189, 13)";
  }

  // Submit if all inputs are valid
  if (isValid) {
    submitted.textContent = "Form submitted successfully!";

    submitted.style.display = "block";
  }
});

// Character counter for the message input
msg.addEventListener("input", function () {
  const messageLength = msg.value.length;
  msgCounter.textContent = `${messageLength}/30 characters`;

  if (messageLength < 30) {
    msgCounter.style.color = "red";
  } else {
    msgCounter.style.color = "green";
  }
});



