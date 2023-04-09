/**
 * 1 - String Reversal
 */

function reverseString(str) {
    // Split the string into an array of characters, reverse the order of the characters, and join them back into a string
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  const originalString = 'Européens';
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Output: "sneéporuE"

//   function reverseString(str) {
//     // Split the string into an array of characters
//     const charArray = str.split('');
    
//     // Use the built-in array reverse method to reverse the order of the characters
//     const reversedArray = charArray.reverse();
    
//     // Join the reversed array of characters back into a string
//     const reversedString = reversedArray.join('');
    
//     // Return the reversed string
//     return reversedString;
//   }
  
//   // Example usage:
//   const originalString = 'hello world';
//   const reversedString = reverseString(originalString);
//   console.log(reversedString); // Output: "dlrow olleh"


/**
 * 2 - Palindrome check
 * def : Un palindrome est un mot, une phrase ou une séquence de caractères 
 * qui peut être lue de la même manière de gauche à droite ou de droite à gauche.
 */

function isPalindrome(str) {
    // Convert the input string to lowercase and remove any non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Check if the reversed string is equal to the original string
    return str === str.split('').reverse().join('');
  }
  
  // Example usage:
  const inputString = 'A man, a plan, a canal: Panama';
  const isInputPalindrome = isPalindrome(inputString);
  console.log(isInputPalindrome); // Output: true


  /**
   * Anagram check
   * word or phrase formed by rearranging the letters of another word or phrase. 
   * For example, the word "listen" can be rearranged to form the word "silent", 
   * which is an anagram of "listen".
   */
  function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
    // Sort the characters of the strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
  
    // Check if the sorted strings are equal
    return str1 === str2;
  }
  
  // Example usage
  console.log(isAnagram('listen', 'silent')); // Output: true
  console.log(isAnagram('rail safety', 'fairy tales')); // Output: true
  console.log(isAnagram('hello', 'world')); // Output: false