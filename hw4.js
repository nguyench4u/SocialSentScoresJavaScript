// JS Tips 
// require keyword is the same as import in Python -> const fs = require('fs') to read files (still needs 'importing' even though built in)
const fs = require('fs')
const readline = require('readline')

// --- Subprogram 1: File reading into dictionary and return the object 
function buildSocialSentimentTable(filePath) { 
    // body
    const data = fs.readFileSync(filePath, 'utf-8'); // utf-8 encoding that turns bytes into readable strings (otherwise Node reads as binary data)
    const lines = data.split('\n'); // split each data line by line 
    const sentimentTable = {}; 

    for(let line of lines) { 
        if (line.trim() === ' ') continue; // skip spaces
        const [word, score] = line.split(','); // split word and score by the comma
        sentimentTable[word.trim()] = parseFloat(score);
    }

    return sentimentTable; 
}

// --- Subprogram 2: Takes the list of words and looks up sentiment score. Track score and output 
function getSocialSentimentScore(words, sentimentTable) {
    // body
    let totalScore = 0;

    for (let word of words) { 
        const cleanWord = word.toLowerCase().replace(/[^\w]/g, ''); // remove any punctuation and cleans the word for comparison
        if (!cleanWord) continue; 

        const score = sentimentTable[cleanWord] ?? 0; // comparison: uses cleanWord as the key for the dictionary of scores. use 0 for score of the word is not found
        totalScore += score;
        console.log(`${cleanWord.padEnd(15)} ${score.toFixed(3).padEnd(15)} ${totalScore.toFixed(3)}`)
    }

    return totalScore; 
}

// --- Subprogram 3: Takes the final sentiment score, uses multi-way selection for the 1-5 star rating and returns rating
function getStarRating(score) { // if-else syntax does not allow multiple symbols comparing to one variable, so we use && here 
    // body
    if (score < -5.0) {
        return 1;
    } else if (score >= -5.0 && score < -1.0) {
        return 2;
    } else if (score >= -1.0 && score < 1.0) {
        return 3; 
    } else if (score >= 1.0 && score < 5.0) {
        return 4;
    } else {
        return 5; 
    }
}

// --- Main Function to Run Everything

function main() {
    const sentimentTable = buildSocialSentimentTable('socialsent.csv'); 

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Ask for user input and searches the file
    rl.question('Enter review filename (good.txt, bad.txt, review.txt): ', function (fileName) {
        // If user presses Enter without typing anything, use 'review.txt' as default
        const realName = fileName.trim() || 'review.txt'; // fallback to default if empty

        try {
            const reviewText = fs.readFileSync(realName, 'utf-8'); 
            const words = reviewText.split(/\s+/); // split .txt by any whitespace

            console.log(`Word`.padEnd(15) + ` Current Score`.padEnd(15) + ` Accumulated Score`);
            const finalScore = getSocialSentimentScore(words, sentimentTable); // Compare words and accumulate scores 
            const starRating = getStarRating(finalScore); // Based on score, give a star rating
            

            console.log(`\nTotal Sentiment Score for ${realName}:  ${finalScore.toFixed(2)}`);
            console.log(`Star Rating for ${realName}: ${starRating}`);

        } catch (err) {
            console.error('Error reading file: ', err.message);
        }

        rl.close(); // close readline interface 
    });
}

main();

// node <filename>.js for program execution 