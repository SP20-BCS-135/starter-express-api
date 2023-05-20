const express = require('express')
const app = express()
const cors = require("cors");
const ConnectToMongo = require("./database");
const dotenv = require('dotenv');
dotenv.config();

ConnectToMongo();    
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.use(cors());
app.use(express.json()); // parsing body
app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));



app.listen(process.env.PORT || 3000)
