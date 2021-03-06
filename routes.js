const express = require('express');
const router = express.Router();

// const permission = require('./middlewares/permission');
// const userRequired = require('./middlewares/auth').userRequired;
//
// const sign = require('./controller/sign');
// const menu = require('./controller/menu');
// const organization = require('./controller/organization');
// const user = require('./controller/user');
// const role = require('./controller/role');
//
// const mpUser = require('./controller/mp_user');
//
// const merchant = require('./controller/merchant');

router.get('/', function (req, res) {
    res.render('home', {message: 'I am Index Page!'});
});

router.get('/product', function (req, res) {
    res.render('product');
});

router.get('/plan', function (req, res) {
    res.render('plan');
});

router.get('/about', function (req, res) {
    res.render('about', {message: 'I am About Page!'});
});


router.get('/employ', function (req, res) {
    res.render('employ', {message: 'I am Employ Page!'});
});

router.get('/full-page', function (req, res) {
    res.render('full-page');
});

router.get('/signin', function (req, res) {
    res.render('signin');
});
//
//
//
// // 登录 登出 首次登陆
// router.post('/api/signin', sign.login);
// router.post('/api/signout', sign.signout);
// router.put('/api/first_login', userRequired, sign.firstLogin);
//
// // 菜单
// router.get('/api/system/menus', userRequired, menu.getAllMenus);
// router.post('/api/system/menus', userRequired, menu.updateAllMenus);
//
// // 组织架构
// router.get('/api/organization/organizations', userRequired, /*permission('organization-search'),*/ organization.getAll);// 这里不要添加权限限制，也不会产生安全性问题，而且用户相关会用到这个接口。
// router.post('/api/organization/organizations', userRequired, permission('organization-update'), organization.updateAll);
//
// // 系统
// router.put('/api/system/pass', userRequired, /*needCurrentUser*/ user.updatePass);
// router.put('/api/system/message', userRequired, /*needCurrentUser*/ user.update);
//
// // 用户
// router.get('/api/organization/users', userRequired, permission('user-search'), user.getByPage);
// router.get('/api/organization/users/:id', userRequired, user.getById);
// router.get('/api/organization/users/loginname/:loginname', userRequired, user.getByLoginNameFromAll);
// router.post('/api/organization/users', userRequired, permission('user-add'), user.addAndSave);
// router.put('/api/organization/users', userRequired, permission('user-update'), user.update);
// router.put('/api/organization/users/reset_pass', userRequired, permission('user-reset-pass'), user.resetPass);
// router.delete('/api/organization/users', userRequired, permission('user-delete'), user.delete);
// router.put('/api/organization/users/toggle_lock', userRequired, permission('user-toggle-lock'), user.toggleLock);
//
// // 角色
// router.get('/api/organization/roles', userRequired, /* permission('role-search'), */role.getByPage); // 这里不要添加权限限制，也不会产生安全性问题，而且用户相关会用到这个接口。
// router.get('/api/organization/roles/:id', userRequired, role.getById);
// router.get('/api/organization/roles/name/:name', userRequired, role.getByRoleNameFromAll);
// router.post('/api/organization/roles', userRequired, permission('role-add'), role.addAndSave);
// router.put('/api/organization/roles', userRequired, permission('role-update'), role.update);
// router.delete('/api/organization/roles', userRequired, permission('role-delete'), role.delete);
//
// // mp user account
// router.post('/api/merchant/users', userRequired, permission('mp-user-add'), mpUser.addAndSave);
// router.delete('/api/merchant/users', userRequired, permission('mp-user-delete'), mpUser.delete);
// router.put('/api/merchant/users', userRequired, permission('mp-user-update'), mpUser.update);
// router.put('/api/merchant/users/toggle_lock', userRequired, permission('mp-user-toggle-lock'), mpUser.toggleLock);
// router.get('/api/merchant/users', userRequired, permission('mp-user-search'), mpUser.getByPage);
// router.get('/api/merchant/account/:account', userRequired, mpUser.getAccountByAccount);
//
// // mp merchant
// router.post('/api/merchant/mchs', userRequired, permission('mch-add'), merchant.addAndSave);
// router.delete('/api/merchant/mchs', userRequired, permission('mch-delete'), merchant.delete);
// router.put('/api/merchant/mchs', userRequired, permission('mch-update'), merchant.update);
//
//

// router.get('*', userRequired, function (req, res, next) {
//     //  根据约定 区分不同得请求类型，返回不同的数据。
//     if (req.path.indexOf('/api') === 0 || req.path.indexOf('/public') === 0) {
//         return res.sendError({
//             status: 404,
//             message: '您访问的资源不存在',
//         });
//     }
//     res.render('index');
// });

module.exports = router;
