const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');



app.use(express.json());
app.use(cors());




app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});