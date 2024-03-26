const { default: mongoose } = require("mongoose")

const userSchema=({
    firstname:{
        type:String,
        trim:true,
        required:true
    },
    lastname:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    company:{
        type:String,
        trim:true,
        required:true
    },
})

const userModel=mongoose.models.user || mongoose.model('user',userSchema)
export default userModel