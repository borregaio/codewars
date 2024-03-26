// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(n) {
    let count = 0;
    
    // Iterate through each bit of the binary representation
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        // Check if the rightmost bit is 1
        if (i % 2 === 1) {
            count++;
        }
    }
    
    return count;
}

// Test the function with an example
console.log(countBits(1234)); // Output should be 5


countBits = n => n.toString(2).split('0').join('').length;