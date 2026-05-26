// Data pools
let names = [];

// Fetch names from names_list.txt
fetch('names_list.txt')
    .then(response => response.text())
    .then(data => {
        // Parse the text file to extract names
        names = data
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => line.replace(/[",]/g, '').trim())
            .filter(line => line.length > 0);
    })
    .catch(error => console.error('Error loading names:', error));

const questions = [
    "What is your absolute favorite movie of all time?",
    "If you could have any superpower, what would it be?",
    "What is the weirdest food combination you actually enjoy?",
    "Where is the first place you would travel if money wasn't an issue?",
    "What is your most used emoji?",
    "If you could live in any fictional universe, which one would you choose?",
    "What's the best piece of advice you've ever received?",
    "Are you a morning person or a night owl?",
    "If you could instantly master any skill, what would it be?",
    "What's your go-to karaoke song?",
    "Have you ever had a completely random encounter that turned into a lifelong friendship?",
    "If you could swap lives with any historical figure for a day, who would it be and why?",
];

// DOM Elements
const nameOutput = document.getElementById('name-output');
const questionOutput = document.getElementById('question-output');
const generateBtn = document.getElementById('generate-btn');

// Helper function to get a random item from an array
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to update the DOM with random data
function generateRandomPair() {
    // Decide randomly: 1 (single name) or 2 (pair)
    const numNames = Math.random() < 0.5 ? 1 : 2;
    let nameText = '';
    if (numNames === 1) {
        nameText = getRandomItem(names);
    } else {
        // Pick two unique names
        let first = getRandomItem(names);
        let second;
        do {
            second = getRandomItem(names);
        } while (second === first);
        nameText = `${first} and ${second}`;
    }
    const randomQuestion = getRandomItem(questions);
    // Update the HTML content
    nameOutput.textContent = `${nameText},`;
    questionOutput.textContent = `"${randomQuestion}"`;
}

// Event Listener
generateBtn.addEventListener('click', generateRandomPair);