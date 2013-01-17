var tests = Object.keys(window.__testacular__.files).filter(function (file) {
    return /Spec\.js$/.test(file);
});
debugger;
require({

    // !! Testacular serves files from '/base'
    baseUrl: '/base/src/main/js',
    paths: {
      require: '../target/js/require',
      backbone: '/base/target/js/backbone'
      //text: '../lib/text'
    },
    shim: {
        backbone: {
            exports: 'Backbone'
        }
    }
  }, tests, function() {
    window.__testacular__.start();
});
