// Define the URL of the server endpoint
const serverUrl = "http://localhost:3000/api/data"; // Replace this URL with your server's endpoint

// Define the data you want to send to the server (optional)
const requestData = {
  key: "value",
};

// Define the configuration for the fetch request
const fetchOptions = {
  method: "POST", // HTTP method (e.g., GET, POST, PUT, DELETE)
  headers: {
    "Content-Type": "application/json", // Specify the content type of the request body
  },
  body: JSON.stringify(requestData), // Convert the request data to JSON format
};

// Make the fetch request to the server
fetch(serverUrl, fetchOptions)
  .then((response) => {
    // Check if the response is successful (status code in the range 200-299)
    if (response.ok) {
      // Parse the response body as JSON
      return response.json();
    } else {
      // If the response is not successful, throw an error
      throw new Error("Failed to fetch data from server");
    }
  })
  .then((data) => {
    // Handle the response data
    console.log("Response from server:", data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch request
    console.error("Error:", error);
  });
