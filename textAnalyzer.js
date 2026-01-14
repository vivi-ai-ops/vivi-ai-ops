function analyzeText(text) {
    let totalCharacters = 0;
    let totalWords = 0;
    let numberOfUniqueWords = 0;
    let mostUsedWord = '';
    let averageWordLength = 0;
    
let cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
totalCharacters = cleanText.replace(/\s/g, "").length
totalWords = cleanText.trim().split(/\s+/).length; 

    function numberOfUniqueWordsFunc(text) {
        let count = 0;
        let uniqueWords = [];
        let words = text.trim().split(/\s+/);
        for(let word of words) {
        if(!uniqueWords.includes(word)) {
            uniqueWords.push(word);
            count++;
            }
        }
        return count;
    }
    

numberOfUniqueWords = numberOfUniqueWordsFunc(text);

    function mostUsedWordFunc(text) {
        let frequency = {};
        let maxCount = 0;
        let mostUsedWord = [];
        let words = text.trim().split(/\s+/);
        for (let word of words) {
        if(frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
     }   for (let word in frequency) {
        if(frequency[word] > maxCount) {
                if(frequency[word] > maxCount) {
            maxCount = frequency[word]
            mostUsedWord = [word];
        } else if (frequency[word] === maxCount) {
            mostUsedWord.push(word);
                }   
            }
        }
        return mostUsedWord;
    }
mostUsedWord = mostUsedWordFunc(text);

averageWordLength = totalCharacters / totalWords;

return {
    totalCharacters,
    totalWords,
    numberOfUniqueWords,
    mostUsedWord,
    averageWordLength,
    }
}



