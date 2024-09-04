
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/' , (req , res)=>{
    res.send("Welcome to AI Bot Using Node JS....");
})

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//const prompt = "Who is the PM of india ";
const generate = async(prompt) => {
    try {
        const result = await model.generateContent(prompt);
        // console.log(result.response.text());
        return result.response.text();
    }
    catch(error) {
        console.log(`Error : ${error}`); 
    }
}

// generate();

app.get("/api/content", async(req, res) => {
    try {
        const prompt = req.body.prompt;
        const result = await generate(prompt);
        res.send({
            "Result ": result
        });
    } catch (error) {
        console.log(`Error : ${error}`); 
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running At : ${process.env.PORT}`);
});


