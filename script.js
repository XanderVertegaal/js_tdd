
const functionList = {

    addOne: function(numbers) {
        return numbers.map(x => x + 1);
    },

    getWordLengths: function(someWords) {
        return someWords.map(x => x.length);
    },

    findNeedle: function(words, keyword) {
        return words.indexOf(keyword);
      }
}

module.exports = functionList;