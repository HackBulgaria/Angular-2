"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var user_component_1 = require('./user.component');
var auth_service_1 = require('../auth.service');
var list_component_1 = require('./list/list.component');
var user_service_1 = require('./user.service');
var routes = [
    {
        path: 'user',
        component: user_component_1.UserComponent,
        children: [
            {
                path: 'list',
                component: list_component_1.ListComponent,
                resolve: [user_service_1.UserListResolver],
                data: {
                    title: 'User List'
                },
                canActivate: [auth_service_1.AuthService]
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
                data: {
                    title: 'Login'
                }
            }
        ]
    }
];
exports.userRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=user.routing.js.map