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
    // resources: db.User,
    // options: {
    //   listProperties: ['name', 'id'],
    // },
  // }],
});

// const router = AdminBroExpress.buildRouter(adminBro);
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await db.User.findOne({ code: 'R3'+'43' });
    if (user && password=='12'+'31'+'1231' && email=='34'+'3') {
      return user;
    }
    return false;
  },
  cookiePassword: '1231'+'1486325',
});

module.exports = {
  useAdminRouter: function(app) {
    app.use(adminBro.options.rootPath, router);
    // app.listen(8787, () => console.log('AdminBro is under localhost:8787/admin'));
    return router;
  }
}
