const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require("./config/db");
const { router } = require('./routes/routes')
const app = express();
const PORT = process.env.port||8000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/' , (req,res) => {
    res.send("Menu Management");
})
app.use("/api",router)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Server listening on port 8000');
    } catch (error) {
        console.log(error);
        console.log('No connection');
    }
})