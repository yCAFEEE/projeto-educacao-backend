import Database from 'better-sqlite3';
import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI);
        console.log("MongoDB conectado");
    }catch(err){
        console.log("Erro ao conectar no MongoDB: ", err)
    }
};

export default connectDB;