const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  EmployeeName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = { EmployeeSchema, Employee };
