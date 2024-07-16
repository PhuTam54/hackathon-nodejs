const { Sequelize } = require('sequelize');

// Kết nối với cơ sở dữ liệu MySQL
const sequelize = new Sequelize('hackathon', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

module.exports = sequelize;