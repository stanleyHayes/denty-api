const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const UserRoutes = require("./routes/Users");
const AppointmentRoutes = require("./routes/Appointments");
const RecordRoutes = require("./routes/Records");
const ArticleRoutes = require("./routes/Articles");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log(`Connected to MongoDB`);
}).catch(function (error) {
    console.log(`Error: ${error.message}`);
});

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/articles", ArticleRoutes);
app.use("/api/v1/appointments", AppointmentRoutes);
app.use("/api/v1/records", RecordRoutes);

app.listen(process.env.PORT, function () {
    console.log(`Server connected on port ${process.env.PORT}`);
});