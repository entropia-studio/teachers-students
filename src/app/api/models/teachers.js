const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const TeacherSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 phone: {
    type: String,
    trim: true,
    required: true
   }
});
module.exports = mongoose.model('Teacher', TeacherSchema)