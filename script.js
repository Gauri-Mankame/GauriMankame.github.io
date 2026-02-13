function showProject(projectName) {
  alert("Project Selected: " + projectName);
}

// TYPING EFFECT
let typingText = "Full Stack Developer | Java Enthusiast | Web Designer";
let i = 0;

function typingEffect() {
  if (i < typingText.length) {
    document.querySelector(".typing-text").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}

typingEffect();



// DARK MODE TOGGLE + SAVE MODE
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Save preference
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};


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
  return false;
}

window.onscroll = function () {
  let btn = document.getElementById("topBtn");

  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollTopFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// PROJECT MODAL DATA
function loadProject(projectName) {
  let title = document.getElementById("modalTitle");
  let body = document.getElementById("modalBody");

  if (projectName === "Portfolio Website") {
    title.innerText = projectName;
    body.innerHTML = "A responsive portfolio website built using HTML, CSS, Bootstrap & JavaScript.";
  }

  if (projectName === "Student Management System") {
    title.innerText = projectName;
    body.innerHTML = "Java + MySQL based project to manage student records with CRUD operations.";
  }

  if (projectName === "Internship Web Application") {
    title.innerText = projectName;
    body.innerHTML = "Developed internship modules using PHP, Bootstrap & Database connectivity.";
  }
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
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


