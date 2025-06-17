document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msgDiv = document.getElementById('formMsg');
    msgDiv.style.color = 'red';
    if (!name || !email || !message) {
        msgDiv.textContent = 'All fields are required.';
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        msgDiv.textContent = 'Please enter a valid email address.';
        return;
    }
    msgDiv.style.color = 'green';
    msgDiv.textContent = 'Thank you for contacting us!';
    this.reset();
});
