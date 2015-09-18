module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine2',

    // Spec patterns are relative to this directory.
    specs: [
        'features/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://127.0.0.1:9001',

    allScriptsTimeout: 40000,
    resultJsonOutputFile: 'test/target/report.json',

    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'protractor-results',
            savePath: 'test/target'
        }));
    }
};
