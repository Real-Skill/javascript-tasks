exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/mouse.spec.js'],
    baseUrl: 'http://localhost:9000'
};
