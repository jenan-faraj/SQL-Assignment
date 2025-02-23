const express = require("express");
const db = require("./main"); // Import the database connection

const app = express();
const PORT = 3000;


// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});