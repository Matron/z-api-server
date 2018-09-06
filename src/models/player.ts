import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        unique: true
    }
});

const Player = mongoose.model("players", playerSchema);
export { Player }