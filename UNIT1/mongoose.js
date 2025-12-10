const mongoose=require('mongoose');
const main =async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/school");
        const StudentSchema=new mongoose.Schema({
            name:String,
            age:Number
        });
        const StudentModel=mongoose.model('Students',StudentSchema);
        let data = new StudentModel({name:'John Doe',age:21});
        let result=await data.save();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main();