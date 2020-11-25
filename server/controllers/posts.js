import PostMessage from '../models/postMessage.js'
import TaSchema from '../models/taData.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    // const { title, message, selectedFile, creator, tags } = req.body;

    // const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    // try {
    //     await newPostMessage.save();

    //     res.status(201).json(newPostMessage );
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // }


    const post  = req.body;

    const newPost  = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}


// export const commentPost = async (req, res) => {


//     const { id } = req.params;

//     //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doubt with id: ${id}`);

//     const comment  = req.body;
//     // const { comments } = req.body;

//     // console.log(req.body);

//     try {
//         const post = await PostMessage.findById(id);
        
//         post.comments.push(comment);
//         post.save();
//         res.status(200).json(post);
        
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const addComment = async (req, res) => {
    const { id} = req.params;

    const {comment} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doubt with id: ${id}`);
    
    const post = await PostMessage.findById(id);
    post.comments.push({text:comment});

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { comments: post.comments }, { new: true });
    
    res.json(updatedPost);
}

export const addAnswer = async (req, res) => {
    const { id} = req.params;

    const {answer, taName, ansTime} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doubt with id: ${id}`);
    
    const post = await PostMessage.findById(id);
    

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { answer: answer, taName:taName, ansTime:ansTime }, { new: true });
    
    res.json(updatedPost);
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////             /////////////////////////////////////////
/////////////////////////////////////    TA       /////////////////////////////////////////
/////////////////////////////////////             /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// export const doubtsAsked = async (req, res) => {
//     const {id} = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No TA data with id: ${id}`);
    
//     const taData = await TaSchema.findById(id);

//     const updatedData = await TaSchema.findByIdAndUpdate(id, { doubtsAccepted: taData.doubtsAccepted+1 }, { new: true });
    
//     res.json(updatedData);
// }

export const getTaData = async (req, res) => { 
    try {
        const taData = await TaSchema.find();
                
        res.status(200).json(taData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTaData = async (req, res) => {
    const post  = req.body;

    const newPost  = new TaSchema(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const addAcceptedDoubts = async (req, res) => {
    const { id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doubt with id: ${id}`);
    
    const post = await TaSchema.findById(id);
    

    const updatedPost = await TaSchema.findByIdAndUpdate(id, { doubtsAccepted: post.doubtsAccepted +1 }, { new: true });
    
    res.json(updatedPost);
}

export const checkEmail = async (req, res) => {
    const {email} = req.params;
    const post = await TaSchema.findOne({email:email});
        
    res.json(post);
}

export const addEscalatedDoubts = async (req, res) => {
    const { id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doubt with id: ${id}`);
    
    const post = await TaSchema.findById(id);
    

    const updatedPost = await TaSchema.findByIdAndUpdate(id, { doubtsEscalated: post.doubtsEscalated +1 }, { new: true });
    
    res.json(updatedPost);
}

export const addResolvedDoubts = async (req, res) => {
    const { id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doubt with id: ${id}`);
    
    const post = await TaSchema.findById(id);
    

    const updatedPost = await TaSchema.findByIdAndUpdate(id, { doubtsResolved: post.doubtsResolved +1 }, { new: true });
    
    res.json(updatedPost);
}

