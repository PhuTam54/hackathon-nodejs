const topicService = require("../../services/TopicService");

exports.getAllTopics = async (req, res) => {
    try {
        const topics = await topicService.getAllTopics();
        res.json({ data: topics, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTopic = async (req, res) => {
    try {
        const topic = await topicService.createTopic(req.body);
        res.json({ data: topic, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTopicById = async (req, res) => {
    try {
        const topic = await topicService.getTopicById(req.params.id);
        if (!topic) {
            return res.status(404).json({ message: "Topic not found" });
        }
        res.json({ data: topic, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateTopic = async (req, res) => {
    try {
        const topic = await topicService.updateTopic(req.params.id, req.body);
        if (!topic) {
            return res.status(404).json({ message: "Topic not found" });
        }
        res.json({ data: topic, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTopic = async (req, res) => {
    try {
        const topic = await topicService.deleteTopic(req.params.id);
        if (!topic) {
            return res.status(404).json({ message: "Topic not found" });
        }
        res.json({ data: topic, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
