import express from "express";
const router = express.Router();
import { Photo_Grapher } from '../schemas/photo_grapher.js';
import { v4 as uuidv4 } from 'uuid';
import Bcrypt from "bcryptjs";
import cors from 'cors';

const photographerAdd = async (req, res) => {
    try {
        const photo_grapher = new Photo_Grapher({
            id: uuidv4(),
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            location: req.body.location

        });
        const result = await photo_grapher.save()
        res.json(result);

    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

router.post('/photographer/set-photographer-request', (req, res) => photographerAdd(req, res))


export default router;