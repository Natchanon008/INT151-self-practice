function longestWord(sentence) {
  if (typeof(sentence) !== "string" || sentence === "") 
    return ""
  const splitword = sentence.split(" ")
  let word = splitword[0]
  
  for (let i = 1; i < splitword.length; i++) {
    if (splitword[i].length > word.length) {
      word = splitword[i];
    }
  }

  return word;
}
module.exports = longestWord
