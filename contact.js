document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form data
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    // Optionally clear the form
    event.target.reset();
});
