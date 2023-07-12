import express from "express";

import mongoose from "mongoose";
import cors from "cors";

/* MONGOOSE SETUP */
const database_link = 'mongodb+srv://admin:adityasoni1017@cluster0.4mitqeh.mongodb.net/?retryWrites=true&w=majority' ;

const DBConnection = async () =>
{
   await mongoose.connect(database_link)
  .then(function(db){
    console.log("db connected ") ;
    // console.log(db) ;

})
.catch(function(err){
    console.log(err) ;

});
}

export default DBConnection ;

