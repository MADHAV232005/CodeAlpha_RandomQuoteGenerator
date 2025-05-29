// 1. Store your quotes in an array
// Each quote is an 'object' with a 'quote' text and an 'author'
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    }
];

// 2. Get references to the HTML elements
// This tells JavaScript to find the specific parts of your HTML using their 'id'
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// 3. Create a function to display a random quote
function displayRandomQuote() {
    // Generate a random index (number) from 0 up to the total number of quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Get the quote object at that random index
    const randomQuote = quotes[randomIndex];

    // Update the text content of your quote and author elements in the HTML
    // We add quotation marks and a dash for better presentation
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
}

// 4. Add an event listener to the button
// This tells the 'new-quote-btn': "When you are clicked, run the displayRandomQuote function."
newQuoteBtn.addEventListener('click', displayRandomQuote);

// 5. Call the function once when the page first loads
// This makes sure a random quote is shown immediately when the user opens the app
displayRandomQuote();