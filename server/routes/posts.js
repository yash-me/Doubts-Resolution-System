import express from 'express';
import {getPosts, createPost, addComment, 
    addAnswer, getTaData,checkEmail,
    addAcceptedDoubts, addEscalatedDoubts, addResolvedDoubts, createTaData} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id/addComment', addComment);
router.patch('/:id/addAnswer', addAnswer);
/////////////////////////////////////////////////////////
/////////////////////  TA  //////////////////////////////
/////////////////////////////////////////////////////////
router.get('/ta', getTaData);
router.post('/ta', createTaData);
router.patch('/:id/addAcceptedDoubts', addAcceptedDoubts);
router.patch('/:id/addEscalatedDoubts', addEscalatedDoubts);
router.patch('/:id/addResolvedDoubts', addResolvedDoubts);
router.patch('/:email/checkEmail', checkEmail);


export default router;