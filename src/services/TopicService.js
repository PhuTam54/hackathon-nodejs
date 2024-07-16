const { Topic, Lesson } = require("../app/models/Topic")

exports.getAllTopics = async () => {
    const topics = await Topic.findAll({
        include: [{
            model: Lesson,
            as: 'Lessons',
        }]
    });

    return topics;
}

exports.createTopic = async (topicData) => {
    const topic = await Topic.create({
        name: topicData.name,
        description: topicData.description
    });

    if (topicData.lessons && topicData.lessons.length > 0) {
        await Promise.all(topicData.lessons.map(async (lesson) => {
            lesson.topicId = topic.id;
            await Lesson.create(lesson);
        }));
    }

    return Topic.findByPk(topic.id, {
        include: [{
            model: Lesson,
            as: 'Lessons'
        }]
    });
}

exports.getTopicById = async (id) => {
    return Topic.findByPk(id, {
        include: [{
            model: Lesson,
            as: 'Lessons'
        }]
    });
}

exports.updateTopic = async (id, topicData) => {
    try {
        const topic = await Topic.findByPk(id);
        if (!topic) {
            return null;
        }
        const updatedTopic = await topic.update(topicData);
        return updatedTopic;
    } catch (error) {
        console.error("Error updating topic:", error);
        throw error;
    }
}

exports.deleteTopic = async (id) => {
    await Lesson.destroy({ where: { topicId: id } });
    return await Topic.destroy({ where: { id } });
}