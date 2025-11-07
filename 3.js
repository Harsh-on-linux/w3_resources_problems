const now = new Date();

const year = now.getFullYear();
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');

console.log(`Format: mm-dd-yyyy ${month}-${day}-${year}`);
