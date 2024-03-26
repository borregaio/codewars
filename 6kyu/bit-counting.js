// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(n) {
    let count = 0;
    
    // Convert the integer to its binary representation and iterate through each bit
    while (n > 0) {
        // Check if the rightmost bit is 1
        if (n & 1) {
            count++;
        }
        // Right shift the number by 1 bit to check the next bit
        n >>= 1;
    }
    
    return count;
}

// Test the function with an example
console.log(countBits(1234)); // Output should be 5