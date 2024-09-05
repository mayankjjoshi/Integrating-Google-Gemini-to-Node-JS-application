import express from "express"
import responsePrompt from "../controllers/userControllers.js"

const router = express.Router();

router.get("/prompt", responsePrompt);


export default router;