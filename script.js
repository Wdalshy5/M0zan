 // Play background music when the page loads
 function blowOutCandle() {
    const flame = document.querySelector('.flame');
    if (flame) {
        flame.style.display = 'none';
        alert('Make a wish!');
    }
}
 // Balloon Game
 let gameContainer = document.getElementById('game-container');
 let startButton = document.getElementById('start-game');
 let scoreElement = document.getElementById('score');
 let score = 0;
 let gameInterval;
 
 function createBalloon() {
     let balloon = document.createElement('div');
     balloon.classList.add('balloon');
     balloon.style.left = Math.random() * (gameContainer.offsetWidth - 40) + 'px';
     balloon.style.backgroundColor = getRandomColor();
     gameContainer.appendChild(balloon);
 
     let animation = balloon.animate([
         { bottom: '-50px' },
         { bottom: gameContainer.offsetHeight + 'px' }
     ], {
         duration: Math.random() * 3000 + 2000,
         easing: 'linear'
     });
 
     animation.onfinish = () => balloon.remove();
 
     balloon.onclick = () => {
         score++;
         scoreElement.textContent = score;
         balloon.remove();
     };
 }
 
 function getRandomColor() {
     return `hsl(${Math.random() * 360}, 100%, 50%)`;
 }
 
 function startGame() {
     score = 0;
     scoreElement.textContent = score;
     gameContainer.innerHTML = '';
     clearInterval(gameInterval);
     gameInterval = setInterval(createBalloon, 1000);
 }
 
 startButton.onclick = startGame;
 
 // Play background music when the page loads
 window.addEventListener('load', function() {
     var backgroundMusic = document.getElementById('backgroundMusic');
     backgroundMusic.volume = 0.5; // Set volume to 50%
     backgroundMusic.play();
 });
 window.addEventListener('load', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 1.0; // Set volume to 100%
    backgroundMusic.play();
});
// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let birthday = new Date("2024-01-05T00:00:00");
    
    // If the birthday this year has already passed, set it to next year
    if (now > birthday) {
        birthday.setFullYear(currentYear + 1);
    }

    const timeLeft = birthday.getTime() - now.getTime();

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        // Birthday has passed
        document.getElementById("countdown").innerHTML = "<h2>Happy Birthday!</h2>";
    }
}

setInterval(updateCountdown, 1000);

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto advance slides every 5 seconds
setInterval(function() {
    plusSlides(1);
}, 5000);

showSlides();

// Quotes Rotation
const quotes = [
    "You're not just my girlfriend, you're my best friend.",
    "Here's to 21 years of being amazing!",
    "Your smile lights up my world.",
    "Wishing you a year filled with love, laughter, and success.",
    "You make every day feel like a celebration."
];

function rotateQuotes() {
    const quoteElement = document.getElementById("quote");
    let currentQuote = 0;
    setInterval(() => {
        quoteElement.textContent = quotes[currentQuote];
        currentQuote = (currentQuote + 1) % quotes.length;
    }, 10000); // Change quote every 10 seconds
}

rotateQuotes();