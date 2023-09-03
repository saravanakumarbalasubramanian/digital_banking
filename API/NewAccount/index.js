// import database
const database = require("../../database/newacc");
//import express Router MicroServices
const Router = require("express").Router();

/*
Route   /
Method   POST
Parameter  NONE
Access  PUBLIC
Description  add new account
*/
Router.post('/addnew', async(req, res) => {
 const {newAcc} = req.body;
 const addNewAccount = await database.create(newAcc);
 return res.json({newAccount : addNewAccount})
}
);

/* 
Route     /getall
Method    GET
Parameter NONE
Access    PUBLIC
Description  to get all accounts
*/
Router.get('/getall', async (req, res) => {
  const allDetails = await database.find();

  return res.json({allAccountDetails: allDetails});
});




module.exports = Router;