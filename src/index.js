const fs = require('fs')
const data = fs.readFileSync('./src/input.txt', 'utf8');
const dbTextToJson = (text) => {
    const dataArray = text.trim().split('\n').map(line => {
        const [fruit, qty] = line.split(' ');
        return { fruit: fruit, quantity: Number(qty) };
    });
    return JSON.parse(JSON.stringify(dataArray));
}
const arr = dbTextToJson(data)
const sum = arr.reduce((acc, cur) => {
    return acc + cur.quantity;
},0)
fs.writeFileSync('./src/output.txt', String(sum));
