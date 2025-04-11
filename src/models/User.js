import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        default: ''
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true

    },
    password:{
        type:String,
        required:true
    },

    isVerified: { 
        type: Boolean,
        default: false 
        },
    failedAttempts: {
        type: Number,
        default: 0
      },
      accountLockedUntil: {
        type: Date,
        default: null
      }
},{timestamps:true});
userSchema.pre("save", async function(next){
    if(!this.isModified("password"))return next();
    this.password=await bcrypt.hash(this.password,12);
    next();
});

export default mongoose.models.User || mongoose.model("User",userSchema);