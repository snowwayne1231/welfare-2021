const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize);

const express = require('express');
const app = express();

const db = require('./models');

const adminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin',
  branding: {
    companyName: 'RV Game Of Throne',
  },
  // resources: [{
  //   resources: db.User,
  //   options: {
      // listProperties: ['name', 'id'],
    // },
  // }],
});

const router = AdminBroExpress.buildRouter(adminBro);

module.exports = {
  useAdminRouter: function(app) {
    app.use(adminBro.options.rootPath, router);
    // app.listen(8787, () => console.log('AdminBro is under localhost:8787/admin'));
    return router;
  }
}
