const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
   
    question: {
      type: String,
      required: true,
      trim:true
    },
    
    option: [  {
      text: {
        type: String
      }
    }]
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
