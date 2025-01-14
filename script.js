document.getElementById('start-now').addEventListener('click', () => {
    document.getElementById('choose-university').scrollIntoView({ behavior: 'smooth' });
});

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cards = Array.from(track.children);

let currentIndex = 0;

function updateTrackPosition() {
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // Account for margin
    const newTransform = -currentIndex * cardWidth;
    track.style.transform = `translateX(${newTransform}px)`;
}

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === cards.length - 1;
}

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateTrackPosition();
    updateButtons();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, cards.length - 1);
    updateTrackPosition();
    updateButtons();
});

// Initialize on page load
updateTrackPosition();
updateButtons();
