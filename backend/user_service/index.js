const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(
    cors({
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
      credentials: true,
    })
);

const port = process.env.APP_PORT;

const user = require('./routes/user.router');
const auth = require('./routes/auth.router');

app.use('/usersystem/user', user);
app.use('/usersystem/auth', auth);

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});