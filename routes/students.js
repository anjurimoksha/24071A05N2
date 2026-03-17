const express = require("express");
const router = express.Router();

// Temporary data (acts like database)
let students = [];

// ➕ CREATE
router.post("/", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.json(newStudent);
});

// 📖 READ ALL
router.get("/", (req, res) => {
    res.json(students);
});

// 📖 READ ONE
router.get("/:id", (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
});

// ✏️ UPDATE
router.put("/:id", (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;

    res.json(student);
});

// ❌ DELETE
router.delete("/:id", (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    students = students.filter(s => s.id != req.params.id);
    res.json({ message: "Student deleted successfully" });
});

module.exports = router;