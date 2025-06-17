document.getElementById('portfolioContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('pname').value.trim();
    const email = document.getElementById('pemail').value.trim();
    const message = document.getElementById('pmessage').value.trim();
    const msgDiv = document.getElementById('pformMsg');
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
    msgDiv.textContent = 'Thank you for contacting me!';
    this.reset();
});
