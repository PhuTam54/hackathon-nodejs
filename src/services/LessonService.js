const { Lesson, Topic } = require("../app/models/Topic")

exports.getAllLessons = async() => {
    return await Lesson.findAll({
        include: [{
            model: Topic,
            as: 'Topic',
        }]
    });
}
exports.createLesson = async (lesson) => {
    const topic = await Topic.findByPk(lesson.topicId);
    if (!topic) {
        throw new Error('Topic not found');
    }
    return await Lesson.create(lesson);
}
exports.getLessonById = async (id) => {
    return await Lesson.findByPk(id, {
        include: [{
            model: Topic,
            as: 'Topic'
        }]
    });
}
exports.updateLesson = async (id, LessonData) => {
    try {
        const lesson = await Lesson.findByPk(id);
        if (!lesson) {
            return null;
        }
        const updatedLesson = await lesson.update(LessonData);
        return updatedLesson;
    } catch (error) {
        console.error("Error updating lesson:", error);
        throw error;
    }

}

exports.deleteLesson = async (id) => {
    return await Lesson.destroy({ where: { id } });
}