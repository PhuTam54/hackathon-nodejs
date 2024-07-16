const express = require('express');
const router = express.Router();

const topicController = require('../app/controllers/TopicController');

router.get('/', topicController.getAllTopics);
router.post('/', topicController.createTopic);

router.get('/:id', topicController.getTopicById);
router.put('/:id', topicController.updateTopic);

router.delete('/:id', topicController.deleteTopic);

module.exports = router;
