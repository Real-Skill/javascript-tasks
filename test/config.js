module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'cucumber',

    // Spec patterns are relative to this directory.
    specs: [
        'features/**/*.feature'
    ],

    capabilities: {
        'browserName': 'firefox'
    },

    baseUrl: 'http://127.0.0.1:9001',

    allScriptsTimeout: 40000,

    cucumberOpts: {
        tags: ['~@ignore'],
        require: 'features/steps/*.js',
        format: 'pretty',
        timeout: 20000
    }
};
