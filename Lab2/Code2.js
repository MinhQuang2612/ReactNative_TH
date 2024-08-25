function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = bills.map(calcTip); 

const total = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills); // [125, 555, 44]
console.log('Tips:', tips);   // [18.75, 111, 8.8]
console.log('Total:', total); // [143.75, 666, 52.8]
