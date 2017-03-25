#ExpressJS - simple security

##Summary
Authentication in ExpressJS.

We've got simple app where user can do CRUD operations on a phone book. Please, secure it.

##Goal
Your task is to secure the `phone` endpoint so that only authenticated users can interact with it.
There are already some routes and business objects configured.
All you need to do is to implement authentication.

Look at `user.manager.js` and `security.js`. Security checks happen on business layer.
Authentication middleware is declared in `routes.js`.
When user is authenticated the middleware should set user property on request object, which is used later on as context to create managers.
Managers pass the context to `security` service that decides if user is authenticated or not.

If user is NOT authenticated an is attempts to get restricted resource, the they should get 401 http status code.
Password in database should be encoded with `sha1`.

##API

###Authenticate user
```
POST /api/user/auth
{email:'', password:''}
```

Expected response:

```
{token:''}
```

The token is plain value. It should be Base64 encoded end sent as header on subsequent requests that requires authorization.
Sample header for token 'abc'.

```
Authorization: Token YWJj
```

##Setup
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run verify jshint, tests and coverage:

    npm test

To run verify jshint, tests and coverage with human readable output:

    grunt --force
