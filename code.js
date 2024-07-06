const apiKey = 'xR8DY2ruSFxFqziGM8B/dw==AYRJyXZub42VkTWy';
const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

async function fetchQuote() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        const data = await response.json();
        if (data.length > 0) {
            const randomQuote = data[0];
            document.getElementById('quote').textContent = randomQuote.quote;
            document.getElementById('author').textContent = `- ${randomQuote.author}`;
        } else {
            throw new Error('No quotes found.');
        }
    } catch (error) {
        console.error('Error fetching the quote:', error);
        document.getElementById('quote').textContent = 'Failed to load quote.';
        document.getElementById('author').textContent = '';
    }
}

document.getElementById('get-quote').addEventListener('click', fetchQuote);

// Fetch an initial quote on page load
fetchQuote();