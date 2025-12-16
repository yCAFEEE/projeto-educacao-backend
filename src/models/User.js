import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowecase: true, trim: true },
    usuario: { type: String, required: true, unique: true, trim: true},
    senha: { type: String, required: true },
    pontos: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);