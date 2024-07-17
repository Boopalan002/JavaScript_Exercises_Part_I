function tenMostFrequentWords(paragraph, numWords = 10) {
    // Step 1: Clean the paragraph and split into words
    const words = paragraph
        .replace(/[.,]/g, '')  // Remove punctuation
        .split(/\s+/);         // Split by whitespace

    // Step 2: Count occurrences of each word
    const wordCount = {};
    words.forEach(word => {
        word = word.toLowerCase(); // Convert to lowercase to handle case insensitivity
        if (word in wordCount) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });

    // Step 3: Convert to array and sort by count in descending order
    const sortedWords = Object.keys(wordCount)
        .map(word => ({ word: word, count: wordCount[word] }))
        .sort((a, b) => b.count - a.count);

    // Step 4: Return the top `numWords` words
    return sortedWords.slice(0, numWords);
}

// Example usage
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph)); // Default is top 10
console.log(tenMostFrequentWords(paragraph, 10)); // Explicitly request top 10




paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

[
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}
]


console.log(tenMostFrequentWords(paragraph, 10))

[{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]

    