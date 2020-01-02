const mongoose = require('mongoose');
var validate = require('mongoose-validator');

var nameValidator = [
   validate({
     validator: 'isLength',
     arguments: [3, 50],
     message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
   }),   
 ]

 var emailValidator = [
   validate({
     validator: 'isEmail',     
     message: 'Please introduce a valid email',
   }),   
 ]

 var phoneValidator = [
    validate({
       validator: 'isMobilePhone',
       message: 'Please introduce a valid phone number',
       arguments: [['en-US', 'es-ES']]         
    })
 ]

//Define a schema
const Schema = mongoose.Schema;
const TeacherSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
  validate: nameValidator
 },
 email: {
  type: String,
  trim: true,
  required: true,
  validate: emailValidator
 },
 phone: {
    type: String,
    trim: true,
    required: true,
    validate: phoneValidator
   }
});



module.exports = mongoose.model('Teacher', TeacherSchema)