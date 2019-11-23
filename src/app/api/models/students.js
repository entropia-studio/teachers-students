const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const StudentSchema = new Schema({   
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 lastname: {
   type: String,
   trim: true,  
   required: true,
  },
 address: {
  type: String,
  trim: true,
  required: true
 },
 phone: {
    type: String,
    trim: true,
    required: true
 },
 teachers: {
    type: Array,
    trim: true,
    required: false
 }

});
module.exports = mongoose.model('Student', StudentSchema)