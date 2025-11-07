const now = new Date();

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];

const dayName = now.getDay();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(day[dayName]);
console.log(`Current time: ${hour}:${min}:${sec}`);
