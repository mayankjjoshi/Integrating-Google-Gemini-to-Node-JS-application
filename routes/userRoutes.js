import express from "express"
import responsePrompt from "../controllers/userControllers.js"

const router = express.Router();

router.post("/prompt", responsePrompt);


export default router;