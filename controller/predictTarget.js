const PredictTarget = require('../model/predicttarget')


const getPredictTargetPage= async(req,res)=>{
    try {
        const predicttarget=await PredictTarget.findOne({})
        res.render("predictTarget/showpredictTarget",{ docTitle: `Show PredictTarget`,predicttarget})
    } catch (error) {
        console.log(error)
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}

const addPredictTarget = async (req, res) => {

    try {
        res.render("predictTarget/addPredictTarget",{ docTitle: `Add Predict Target`,})
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}



const createPredictTarget = async (req, res) => {
    try {

        await PredictTarget.create(req.body)

        req.flash(
            'success_msg',
            'Target updated Successfully'
        );
        res.redirect("/predicttarget")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}




//exporting
module.exports = {
    addPredictTarget,
    createPredictTarget,
    getPredictTargetPage
}