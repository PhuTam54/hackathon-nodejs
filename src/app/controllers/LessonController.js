const lessonService = require("../../services/LessonService");

exports.getAllLessons = async (req, res) => {
    try {
        const lessons = await lessonService.getAllLessons();
        res.json({ data: lessons, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createLesson = async (req, res) => {
    try {
        const lesson = await lessonService.createLesson(req.body);
        res.json({ data: lesson, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLessonById = async (req, res) => {
    try {
        const lesson = await lessonService.getLessonById(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }
        res.json({ data: lesson, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateLesson = async (req, res) => {
    try {
        const lesson = await lessonService.updateLesson(req.params.id, req.body);
        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }
        res.json({ data: lesson, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteLesson = async (req, res) => {
    try {
        const lesson = await lessonService.deleteLesson(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }
        res.json({ data: lesson, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
