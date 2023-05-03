const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
var createError = require("http-errors")

router.get("/", async (req, res,next) => {
 try {
   // bir await fonksiyonu kullandigimiz icin burada async keyi yazmak zorunludur
   // burada then ve catch kullanabilirdik ancak bu sekilde daha okunakli. bu sayede bu uzun suren islemi bekle buldugun sonucu ata demis olduk
   const allUsers = await User.find(); 
   res.json({
     allUsers,
   });
 } catch (err) {
  next(createError(400,err))
 }
});
router.get("/:id", (req, res,next) => {
  try {
    res.json({ 
      message: "User with id : " + `${req.params.id}`
    });
    
  } catch (err) {
    next(new createError(404,err))
  }
  
});

router.post("/", async (req, res,next) => {
  try {
    const newUser = new User(req.body);
    const addUser = await newUser.save();
    res.send(addUser);
    console.log("succesfully added");
  } catch (err) {
    next(createError(400,err))
  }
});
router.patch("/:id", async (req, res,next) => {
  try {
    const patchUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true , runValidators:true}// burada runvalidators ile usermodelde belirledigimiz yazim kurallarini da gecerli kilariz 
    );
    if (patchUser) {
      return res.json(patchUser);
    } else {
      throw createError = (404,"User not found")
    }
  } catch (err) {
    next(createError(404,err))
  }
});

router.delete("/:id", async (req, res,next) => {
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: req.params.id });
    if (deletedUser) {
      return res.json({
        message: "User with id " + req.params.id + " has been deleted",
      });
    } else {
    
      throw createError = (404,"User not found")
    }
  } catch (err) {
    next(createError(404,err))
  }
});
module.exports = router; // export ile buraya disardan erisim saglanir
