const express = require('express')
const route = require('./routes');

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Routes init
route(app);

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)