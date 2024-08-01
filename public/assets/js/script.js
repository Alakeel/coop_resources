// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();

    // Display the data in the HTML
    const container = document.getElementById('data-container');
    container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = {
    name: formData.get('name'),
    age: formData.get('age')
  };

  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const result = await response.json();
    console.log('Server response:', result);
    fetchData();
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

// Fetch data when the page loads
window.onload = fetchData;

// Add event listener for form submission
document.getElementById('user-form').addEventListener('submit', handleSubmit);