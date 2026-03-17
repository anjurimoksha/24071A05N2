const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// ✅ Home Route (for browser)
app.get("/", (req, res) => {
    res.json({
        message: "Student API is running 🚀",
        endpoints: {
            getAll: "GET /students",
            getOne: "GET /students/:id",
            create: "POST /students",
            update: "PUT /students/:id",
            delete: "DELETE /students/:id"
        }
    });
});

// Routes
const studentRoutes = require("./routes/students");
app.use("/students", studentRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});