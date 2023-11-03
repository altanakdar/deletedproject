import mongoose from 'mongoose'

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL){
        return console.log('Missing mongodb url');
    }
    if(isConnected){
        return console.log('MongoDb is already connected');
    }
    try {
       await mongoose.connect(process.env.MONGODB_URL, {
        dbName:'dewflowaltan'
       }) 
       isConnected = true;
       console.log("MongoDb is connected");
       
    } catch (error) {
        console.log('MongoDb connection failed', error);
        
    }
}