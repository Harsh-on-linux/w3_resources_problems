const today = new Date();
let year = today.getFullYear();
let christmas = new Date(year, 11, 25); // 11 = December (months are 0-based)

if (today > christmas) {
  // If today is after Dec 25, use next year's Christmas
  christmas = new Date(year + 1, 11, 25);
}

const diffDays = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));
console.log(`🎄 Days until Christmas: ${diffDays}`);
