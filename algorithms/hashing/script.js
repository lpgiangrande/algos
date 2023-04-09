// Import the built-in Node.js crypto module
const crypto = require('crypto');

/**
 * MD5
 */

// // Define a function that generates an MD5 hash from an input string
// function generateMD5Hash(inputString) {
//   // Create a new hash object using the MD5 algorithm
//   const hash = crypto.createHash('md5');
//   // Update the hash object with the input string
//   hash.update(inputString);
//   // Generate the final hash value as a hex string
//   const hexHash = hash.digest('hex');
//   // Return the hex hash value
//   return hexHash;
// }

// // Define an input string to hash
// const inputString = '19MotdePasse@&!';

// // Call the generateMD5Hash function with the input string
// const md5Hash = generateMD5Hash(inputString);

// // Log the resulting MD5 hash to the console
// console.log(md5Hash); // Output: 86fb269d190d2c85f6e0468ceca42a20


/**
 * SHA-256
 */

// Define a function that generates a SHA-256 hash from an input string
function generateSHA256Hash(inputString) {
    // Create a new hash object using the SHA-256 algorithm
    const hash = crypto.createHash('sha256');
    // Update the hash object with the input string
    hash.update(inputString);
    // Generate the final hash value as a hex string
    const hexHash = hash.digest('hex');
    // Return the hex hash value
    return hexHash;
  }
  
  // Define an input string to hash
  const inputString = 'HelloWorld7898§oymm#';
  
  // Call the generateSHA256Hash function with the input string
  const sha256Hash = generateSHA256Hash(inputString);
  
  // Log the resulting SHA-256 hash to the console
  console.log(sha256Hash);