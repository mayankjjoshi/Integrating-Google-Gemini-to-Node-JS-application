
import express from "express";
import dotenv from 'dotenv';
import path from "path"
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();


app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/api", userRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running At : ${process.env.PORT}`);
});


