/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

  function isAnagram(str1, str2) {
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Check if the lengths are different, if so, they can't be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // Sort the characters and compare the sorted strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  const result1 = isAnagram('listen', 'silent');
  console.log(result1); // Output: true
  
  const result2 = isAnagram('hello', 'world');
  console.log(result2); // Output: false
module.exports = isAnagram;
