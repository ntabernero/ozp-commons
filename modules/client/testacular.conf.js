// Testacular configuration
// Generated on Thu Jan 17 2013 09:28:34 GMT-0500 (Eastern Standard Time)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  'target/libs/patches/mocha-patch.js',
  'target/libs/js/lodash.js',
  REQUIRE,
  REQUIRE_ADAPTER,
  
  // Libs required for test framework
  
  // libs
  'target/libs/js/json2.js',
  'target/libs/js/jquery.js',
  'target/libs/js/backbone.js',
  'target/libs/js/backbone.declarative.views.js',
  'target/libs/js/handlebars.js',
  'target/libs/js/expect.js',
  'target/libs/js/sinon.js',
  'target/libs/js/jquery.atmosphere.js',
  
  // Include the script to configure and trigger require.
  'src/test/js/config.js',
  
  // Include the src and test files on the test server but not as script tags.
  {pattern: 'target/libs/js/bootstrap/*.js', included: false},
  {pattern: 'src/main/webapp/js/**/*.js', included: false},
  {pattern: 'src/test/js/**/*.js', included: false}
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'junit'];

junitReporter= {
     outputFile: 'target/surefire-reports/test-results.xml'
};

// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 30000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;
