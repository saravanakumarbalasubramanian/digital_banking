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

/*
Route  /modify/phoneno/:username
Method  PUT
parameter  /:username
Access  PUBLIC
Description  to modify or update phone number
*/
Router.put('/modify/phoneno', async(req, res) => {
  const newdata = await database.findOneAndUpdate(
  {
      name : req.body.name,
  },
  {
    phonenumber : req.body.newnumber,
  },
  {
    new : true,
  },
  );
  return res.json({ministatement : newdata});
});

/*
ROUTE           /update/username/
METHOD          PUT 
PARAMETER       NONE
ACCESS          PUBLIC
Desctiption     to update the user name 
*/
Router.put('/update/username', async(req, res) => {
    const updateusername = await database.findOneAndUpdate(
      {
        name : req.body.oldusername,
      },
      {
        name : req.body.newusername,
      },
      {
        new : true,
      },
    )
    return res.json({message : updateusername});
});

/*
ROUTE       /change/acc/branch
METHOD      PUT
PARAMETER   NONE
ACCESS      PUBLIC
DESCRIPTION     Requesting to change the account branch
*/
Router.put('/change/acc/branch', async(req, res) => {
  const updatedData = await database.findOneAndUpdate(
    {
      name: req.body.username,
    },
    {
      branch: req.body.newbranch,
    },
    {
      new: true,
    },
    );
    const updateifsc = await database.findOneAndUpdate(
      {
        name : req.body.username,
      },
      {
        IFSCcode: req.body.newifsccode,
      },
      {
        new: true,
      },
      );
      return res.json({message: updatedData, updateifsc});

});



module.exports = Router;