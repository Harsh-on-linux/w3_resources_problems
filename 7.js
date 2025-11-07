const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 14; i <= 50; i++) {
  const date = new Date(`20${i}-01-01`);
  if (days[date.getDay()] === "Sunday") {
    console.log(`20${i}\n`);
  }
}
