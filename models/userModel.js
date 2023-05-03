const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    // burada databasede saklanilan isimleri requirementlarini hazirliyoruz
    type: String, // yani string olacak zorunluluk olacak bosluklar kesilecek min ve max length belli olacak sekilde
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  }
},{collection:'Users',timestamps:true}); // database'e users olarak kaydedecek
//timestamps burada createdAt ve updatedAt propertylerini ekler
const User = mongoose.model('User', userSchema)

module.exports = User
