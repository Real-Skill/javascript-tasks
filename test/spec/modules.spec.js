var modulesAnswers = exports.modulesAnswers;

describe('the module pattern', function() {
    it('you should be able to create a function that returns a module', function() {
        var module = modulesAnswers.createModule('hello', 'matt');

        expect(typeof module.sayIt).toBe('function');
        expect(module.name).toEqual('matt');
        expect(module.greeting).toEqual('hello');
        expect(module.sayIt()).toEqual('hello, matt');

        module.name = 'katniss';
        module.greeting = 'hi';
        expect(module.name).toEqual('katniss');
        expect(module.greeting).toEqual('hi');
        expect(module.sayIt()).toEqual('hi, katniss');
    });
});
