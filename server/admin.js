const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');
const md5 =require("md5");

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


module.exports = {
  useAdminRouter: function(app) {
    const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
      authenticate: async (email, password) => {
        const md5pwd = md5(password);
        const user = await db.User.findOne({ where: { code: 'R3'+'43', pwd: md5pwd }});
        if (user && email=='ad'+'min') {
          return user;
        }
        return false;
      },
      cookiePassword: '1231'+'1486325',
    });
    app.use(adminBro.options.rootPath, router);
    return router;
  },
  useAdminRouterDev: function(app) {
    const router = AdminBroExpress.buildRouter(adminBro);
    app.use(adminBro.options.rootPath, router);
  }
}
