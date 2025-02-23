const { Pool } = require("pg");

// PostgreSQL Connection Pool
const db = new Pool({
  user: "postgres", // Change this
  host: "localhost",
  password: "jenan.2004", // Change this
  database: "taskdb", // Change this
  port: 5432, // Default PostgreSQL port
});

db
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err));

module.exports = db; // Export the pool for use in other files
