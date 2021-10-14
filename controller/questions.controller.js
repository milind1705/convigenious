const Question = require("../models/questions");

module.exports.create = (req, res) => {
  const question = req.body;
  const options = req.body;

  let newQuestion = new Question({question:question} );
  newQuestion
    .save()
    .then((data) => {

      res.status(200).json({
        success: true,
        data:data,
        error:null,
        message:"Question saved succesfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        data:null,
        error: err.message,
        message: "ERROR_HERE"
      });
    });
};

module.exports.getAll = (req, res) => {
  
    Question.find({})
    .then((data) => {
      res.status(200).json({success: true,
        data:data,
        error:null,
        message:"data fetched succesfully"
      });
    })
    .catch((error) => {
        return res.status(400).json({
          success:false,
          data:null,
          error: error.message,
          message: "ERROR_HERE"
        });
      });
  } 
    


module.exports.getOne = (req, res) => {
    Question.findById({
    _id: req.params.id,
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        data:data,
        error:null,
        message:"Data fetched succesfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        data:null,
        error: err.message,
        message: "ERROR_HERE"
      });
    });
};

module.exports.update = async (req, res) => {
  
  try{
    const id = req.params.id;
    const updated= await Question.findByIdAndUpdate(id, req.body, {new: true})
    res.json({  success: true,
            data:updated,
            error:null,
            message:"Data fetched succesfully" });
       
    }    catch(err){
        return res.status(400).json({
          success: false,
            data:null,
            error: err.message,
            message: "ERROR_HERE"
        })
    }
}


module.exports.delete = (req, res) => {
  Question.findByIdAndDelete({
    _id: req.params.id,
  })
    .then(() => {
      res.status(200).json({
        success: true,
        message:"Question deleted"
      });
    })
    .catch((err) => {
      res.status(400).json({
        data:null,
        error: err.message,
        message: "ERROR_HERE"
      });
    });
};
