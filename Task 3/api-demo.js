document.getElementById('jokeBtn').onclick = async function() {
    const jokeP = document.getElementById('joke');
    jokeP.textContent = 'Loading...';
    try {
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await res.json();
        jokeP.textContent = `${data.setup} ${data.punchline}`;
    } catch (err) {
        jokeP.textContent = 'Failed to fetch joke.';
    }
};
