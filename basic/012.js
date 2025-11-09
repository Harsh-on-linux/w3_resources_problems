const button = document.getElementById('copyUrlBtn');

button.addEventListener('click', async () => {
  const currentUrl = window.location.href; // get current page URL

  try {
    await navigator.clipboard.writeText(currentUrl); // copy URL
    console.log(`Copied URL: ${currentUrl}`); // log it
    alert('URL copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy URL:', err);
  }
});
