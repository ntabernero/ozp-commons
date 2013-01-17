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




//// require.js configuration for Testacular test setup.
//require.config({
//
//    // Initialize the application with the main application file.
//    
//    baseUrl: '/base/src/test/js',
////    paths: {
////        require: '../../../target/js/require'
////    }
//    paths: {
//        // alias versioned dependencies to simplify updating as new versions are released
//        // Modify this to remove any extraneous libraries or add custom elements.
//        expect: '/base/target/js/expect',
//        sinon: '/base/target/js/sinon',
//        jquery: '/base/target/js/jquery',
//        lodash: '/base/target/js/lodash',
//        backbone: '/base/target/js/backbone'
//    },
//
//// JASMINE, REQUIRE ADAPTER SHIM
//    shim: {
//        // Backbone library depends on lodash and jQuery.
//          'shim.js': {
//            exports: 'global'
//          },
//          lodash: {
//              exports: '_',
//          },
//          backbone: {
//              exports: 'Backbone'
//          }
//
//    }
//    
//
//});
//
////bootstrap - require, once loaded, kick off test run
////require(['/base/target/js/lodash.js','/base/target/js/backbone.js'], function(lodash, backbone) {
////    debugger;
////  window.__testacular__.start();
////  console.log('backbone.js:', backbone);
////});
////JASMINE, REQUIRE ADAPTER STARTER
//require(['lodash', 'backbone'
//         '/base/src/test/js/test.js',
//         '/base/src/test/js/models/ModelSpec.js',
//         '/base/src/test/js/shim.js'], function(lodash, backbone, test, shim) {
//    debugger;
//    window.__testacular__.start();
//    console.log('shim.js:', shim);
//  });
////// MOCHA REQUIRE STARTER
////require(['/base/src/test/js/test'], function() {
////   window.__testacular__.start(); 
////});