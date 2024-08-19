// Tính điểm trung bình của đội
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Dữ liệu 1
let dolphinsAvg = calcAverage(96, 108, 89);
let koalasAvg = calcAverage(88, 91, 110);

console.log(`Data 1: Dolphins Average: ${dolphinsAvg.toFixed(2)}, Koalas Average: ${koalasAvg.toFixed(2)}`);

if (dolphinsAvg > koalasAvg) {
    console.log("Dolphins win the trophy!");
} else if (koalasAvg > dolphinsAvg) {
    console.log("Koalas win the trophy!");
} else {
    console.log("It's a draw!");
}

dolphinsAvg = calcAverage(97, 112, 101);
koalasAvg = calcAverage(109, 95, 123);

console.log(`Bonus 1: Dolphins Average: ${dolphinsAvg.toFixed(2)}, Koalas Average: ${koalasAvg.toFixed(2)}`);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Dolphins win the trophy!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("Koalas win the trophy!");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy!");
}

dolphinsAvg = calcAverage(97, 112, 101);
koalasAvg = calcAverage(109, 95, 106);

console.log(`Bonus 2: Dolphins Average: ${dolphinsAvg.toFixed(2)}, Koalas Average: ${koalasAvg.toFixed(2)}`);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Dolphins win the trophy!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("Koalas win the trophy!");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy!");
}