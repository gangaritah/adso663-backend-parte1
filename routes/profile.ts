import express from 'express';
import profile from '../controllers/profile-controller';

const router = express.Router();


router.get('/', profile);


export default router;