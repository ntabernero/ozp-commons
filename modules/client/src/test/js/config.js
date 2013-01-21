var tests = [];
for (var file in window.__testacular__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    enforceDefine: true
});

require({

    // !! Testacular serves files from '/base'
    baseUrl: '/base/src/main/js',
    paths: {
        require: '../target/js/require',
        jquery: '/base/target/js/jquery',
        backbone: '/base/target/js/backbone',
        lodash: '/base/target/js/lodash'
        //text: '../lib/text'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        backbone: {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        },
        lodash: {
            exports: '_'
        }
    }
}, tests, function() {
    window.__testacular__.start();
});
