const express = require('express');
const router = express.Router();

const lessonController = require('../app/controllers/LessonController');

router.get('/', lessonController.getAllLessons);
router.post('/', lessonController.createLesson);

router.get('/:id', lessonController.getLessonById);
router.put('/:id', lessonController.updateLesson);

router.delete('/:id', lessonController.deleteLesson);

module.exports = router;
