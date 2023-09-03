// intialize Router from express for microservices
const Router = require("express").Router();

// import databse
const database = require("../../database/accdetail");

/*
Router   /
Method   post
Parameter None
Access   Public
Description  create a account with bank balance
*/
Router.post('/newacc', async (req, res) => {
    const {newdata} = req.body;

    const details = await database.create(newdata);

    return res.json({newBankStatement : details});
});

/*
Route  /getall
Method  GET
Parameter none
Access  PUBLIC
Description  get all account
 */
Router.get('/getallaccount', async(req,res) => {
   const getAllAccDetails = await database.find();
   return res.json({allAccountStatements: getAllAccDetails});
});



module.exports = Router;