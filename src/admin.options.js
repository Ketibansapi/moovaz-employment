const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');
const { Employee } = require('./employees/employee.entity');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminCompany, Employee],
};

module.exports = options;
