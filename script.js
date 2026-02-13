// TYPING EFFECT
let typingText = "Full Stack Developer | Java Enthusiast | Web Designer";
let i = 0;

function typingEffect() {
  document.querySelector(".typing-text").innerHTML =
    typingText.slice(0, i);

  i++;
  if (i <= typingText.length) {
    setTimeout(typingEffect, 80);
  }
}
typingEffect();


// DARK MODE TOGGLE + SAVE
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}

// Load saved theme instantly
document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});


// CONTACT FORM VALIDATION
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  if (name === "" || email === "" || msg === "") {
    document.getElementById("formStatus").innerHTML =
      "⚠️ Please fill all fields!";
    return false;
  }

  document.getElementById("formStatus").innerHTML =
    "✅ Message Sent Successfully!";

  setTimeout(() => {
    document.getElementById("formStatus").innerHTML = "";
  }, 3000);

  return false;
}


// SCROLL TO TOP BUTTON
window.onscroll = function () {
  let btn = document.getElementById("topBtn");

  btn.style.display =
    document.documentElement.scrollTop > 200 ? "block" : "none";
};

function scrollTopFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// PROJECT MODAL DETAILS
function loadProject(projectName) {
  let title = document.getElementById("modalTitle");
  let body = document.getElementById("modalBody");

  title.innerText = projectName;

  if (projectName === "Portfolio Website") {
    body.innerHTML =
      "A responsive portfolio website built using HTML, CSS, Bootstrap & JavaScript.";
  } 
  else if (projectName === "Student Management System") {
    body.innerHTML =
      "Java + MySQL project to manage student records with CRUD operations.";
  } 
  else if (projectName === "Internship Web Application") {
    body.innerHTML =
      "Developed internship modules using PHP, Bootstrap & Database connectivity.";
  } 
  else {
    body.innerHTML = "Project details coming soon...";
  }
}


// ACTIVE NAVBAR LINK ON SCROLL
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
