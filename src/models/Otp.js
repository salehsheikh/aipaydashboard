import mongoose from "mongoose"
const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:true
    },
    code: {
        type: String,
        required: true
      },
      expiresAt: {
        type: Date,
        default: Date.now,
        index: { expires: '5m' }
      },
      attempts: {
        type: Number,
        default: 0
      }
});
export default mongoose.models.Otp || mongoose.model("Otp",otpSchema);