const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authrout = require('./routes/users')
const adrout = require('./routes/Adminrout')
const productrout = require('./routes/ProductRout')
const chartrout = require('./routes/Chartrout')
const orderrout = require('./routes/orderrout')
const cors = require('cors')

app.use(cors());



const bodyParser = require('body-parser');



app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
MONGO_URL = "mongodb+srv://iAmritSingh:Amrit@cluster0.kwfa8lg.mongodb.net/CMS?retryWrites=true&w=majority";
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(console.log("connected to mongodb atlas"))
    .catch((err) => console.log(err));

app.use("/api/auth", authrout);
app.use("/api/ad", adrout);
app.use("/product", productrout);
app.use("/chart", chartrout);
app.use("/order", orderrout);


app.listen("3000", () => {
    console.log("Server is running at 3000");
})