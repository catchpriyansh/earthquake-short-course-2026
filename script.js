// Countdown Timer
const countdown = document.getElementById("countdown");
const deadline = new Date("March 11, 2026 23:59:59").getTime();

setInterval(function() {
const now = new Date().getTime();
const distance = deadline - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
const seconds = Math.floor((distance % (1000*60))/1000);

if(distance > 0){
countdown.innerHTML =
days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds";
} else {
countdown.innerHTML = "Registration Closed";
}
}, 1000);

// Scroll Animation
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
}, { threshold: 0.2 });

faders.forEach(fade => {
observer.observe(fade);
});
