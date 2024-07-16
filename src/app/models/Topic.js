const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Lesson = sequelize.define('Lesson', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  topicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Topics', // This is a reference to another model
      key: 'id', // This is the column name of the referenced model
    }
  }
});

const Topic = sequelize.define('Topic', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Quan hệ một-nhiều giữa Topic và Lesson
Lesson.belongsTo(Topic, { foreignKey: 'topicId' });
Topic.hasMany(Lesson, { foreignKey: 'topicId' });

module.exports = { Topic, Lesson };