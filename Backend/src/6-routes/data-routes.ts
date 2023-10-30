import express, { Request, Response, NextFunction } from "express";
import axios from 'axios';

const router = express.Router();

router.get("/genderize", async (request: Request, response: Response, next: NextFunction) => {
    
    const { name } = request.query;
    try {
        response.json = await axios.get(`https://api.genderize.io?name=${name}`);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/nationalize", async (request: Request, response: Response, next: NextFunction) => {
    
    const { name } = request.query;
    try {
        response.json = await axios.get(`https://api.nationalize.io?name=${name}`)
    }
    catch(err: any) {
        next(err);
    }
});


export default router;


