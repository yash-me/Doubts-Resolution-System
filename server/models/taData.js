import mongoose from 'mongoose';

const taSchema = mongoose.Schema({
    name:String,
    email:String,
    doubtsAccepted: {
        type: Number,
        default: 0,
    },
    doubtsResolved: {
        type: Number,
        default: 0,
    },
    doubtsEscalated: {
        type: Number,
        default: 0,
    },
    
    
})

var TaSchema = mongoose.model('TaSchema', taSchema);

export default TaSchema;