const { config } = require('dotenv');
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./MealRoutes');
const cors = require ('cors');

require("dotenv"), config();
mongoose.set("strictQuery", false);

const PORT = 3000 || process.env.PORT;

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_LINK)
.then(() => console.log('We connected ro MONGO'))
.catch((err) => console.log(err))


app.use(router);


app.listen(PORT, () =>{
    console.log(`I am listen on PORT ${PORT}`)
})

