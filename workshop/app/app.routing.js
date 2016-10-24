"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        data: {
            title: 'Home'
        }
    }
];
exports.appRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map