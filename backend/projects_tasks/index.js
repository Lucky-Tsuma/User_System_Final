const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());
app.use(
    cors({
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
      credentials: true,
    })
);

const projectsRouter = require('./routes/projects.router');
const tasksRouter = require('./routes/tasks.router');

app.use('/usersystem/projects', projectsRouter);
app.use('/usersystem/tasks', tasksRouter);



app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});