// Get elements
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cards = Array.from(track.children);

// Track the current index of the card
let currentIndex = 0;

// Function to update the position of the carousel track
function updateTrackPosition() {
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // Adjust card width including margin
    const newTransform = -currentIndex * cardWidth;
    track.style.transform = `translateX(${newTransform}px)`;
}

// Function to update the state of the buttons
function updateButtons() {
    prevButton.disabled = currentIndex === 0; // Disable 'prev' if at the first card
    nextButton.disabled = currentIndex === cards.length - 1; // Disable 'next' if at the last card
}

// Event listener for the 'prev' button
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateTrackPosition();
        updateButtons();
    }
});

// Event listener for the 'next' button
nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateTrackPosition();
        updateButtons();
    }
});

// Initialize button states when the page loads
updateButtons();
