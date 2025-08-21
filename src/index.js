const fs = require('fs');

try {
    // Read the contents of input.txt
    const data = fs.readFileSync('src/input.txt', 'utf8');
    
    // Extract numbers using regex
    const numbers = data.match(/\d+/g);
    
    // Convert strings to numbers and sum them
    const sum = numbers ? numbers.reduce((acc, curr) => acc + parseInt(curr), 0) : 0;
    
    console.log(sum);
} catch (err) {
    console.error('Error reading the file:', err);
}