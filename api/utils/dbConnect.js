import mongoose from "mongoose"


const dbConnect = async ()=>{
    try {
     await mongoose.connect(process.env.MONGO_URL)
     .then(()=>console.log("db connected"))
     .catch(error => console.log(error.message))
    } catch (error) {
        console.log(error.message);
    }
}

export default dbConnect;