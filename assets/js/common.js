//Burger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Kanye Quote

async function kanyeQuote() { 
    const textDiv = document.getElementById("footerText");

    const data = await fetch('https://api.kanye.rest/');
    const response = await data.json();
    console.log(response);
    const quote = response.quote;
    textDiv.innerText = "Kanye West once said: " + '"' + quote + '"';
}

//Darkmode

let currentTheme = "light"

const savedTheme = localStorage.getItem("theme")

if(savedTheme) {
    currentTheme = savedTheme
}

document.documentElement.setAttribute('data-theme', currentTheme);

document.getElementById("modeSwitcher").addEventListener("click", () => {
    if(currentTheme === "light") {
        currentTheme = "dark"
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        currentTheme = "light"
        document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem("theme", currentTheme)
})

//Typewriter effect

let text = "> Hey, i'm Mattia $ > I live in Bern / Switzerland $ > I'm in an apprenticeship as a software developer $ > In my free time I like to do sports, meet up with friends or play videogames"
let i = 0;
const container = document.getElementById("aboutText");

function typewriter() {
    if (i < text.length) { 
        if (text.charAt(i) === '$') { 
            container.innerHTML += "<br>";
        } else {
            container.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typewriter, 40);
    }
}

//On page load

window.addEventListener("load", kanyeQuote());

if (window.location.href.includes("about")) {
    window.addEventListener("load", typewriter);
}