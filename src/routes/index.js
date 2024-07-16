const topicRouter = require('./topic');
const lessonRouter = require('./lesson');

function route(app) {
    app.use('/api/topics', topicRouter);
    app.use('/api/lessons', lessonRouter);
}

module.exports = route;