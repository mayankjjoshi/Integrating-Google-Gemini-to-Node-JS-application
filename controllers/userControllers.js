
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

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

const responsePrompt = async(req, res) => {
    try {
        const prompt = req.body.prompt;
        const result = await generate(prompt);
        res.json({
            "Result": result
        });
    } catch (error) {
        console.log(`Error : ${error}`); 
    }
}

export default responsePrompt;