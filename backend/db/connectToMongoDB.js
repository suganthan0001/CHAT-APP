import mongoose from 'mongoose';


async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to Database");
    }catch(e){
        console.log(e);
    }

}

export default connectToDB;