'use strict'

define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {
    var model = {};
    model.router = router;

    model.name = ko.observable();
    model.hidtxt = ko.observable(false);
    model.name('qqqq');


    //router.map([
    //    { route: '', title: 'menu', moduleId: 'Hello/menu', nav: true }
    //]).buildNavigationModel();
    model.activate=function () {
        router.map([
            { route:['','index'], title: 'menu', moduleId: 'Hello/menu', nav: true },
            { route: 'content', title: 'content', moduleId: 'Hello/content', nav: true }
        ]).buildNavigationModel();
              
        return router.activate();
    }

    model.show = function () {
        model.hidtxt(true);
        model.name(model.name());
    }
    return model;
})