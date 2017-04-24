//严格模式
'use strict'

// require 配置项  shim 加载非规范模块
requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal',
        'plugins': '../lib/durandal/plugins',
        'transitions': '../lib/durandal/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

//加载依赖脚本
define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'],
    function (system, app, viewLocator) {
        app.title = 'myDurandal',
        app.configurePlugins({
            router: true,
            dialog: true
        });
        app.start().then(function () {
            viewLocator.useConvention(),
            app.setRoot('Hello/index', 'entrance')
        })

    })
