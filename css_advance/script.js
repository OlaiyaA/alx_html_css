

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    console.log('Success:', data); 
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();




// Function to fetch and log a random activity from the Bored API
function getBoredActivity() {
  // Make a fetch request to the API
  fetch("https://bored-api.appbrewery.com/")
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      // Convert the response to JSON
      return response.json();
    })
    .then((data) => {
      // Log the activity suggestion to the console
      console.log("💡 Suggested Activity:", data.activity);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      console.error("Error fetching activity:", error);
    });
}

// Call the function to test
getBoredActivity();
