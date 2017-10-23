# ExpressJS - simple security

## Summary
Authentication in ExpressJS.

We have a simple app in which the user can do CRUD operations on the phone book. You should secure the app.

## Goal
Your task is to secure the `phone` endpoint so that only authenticated users could interact with it.
There have been some routes and business objects configured already.
All you need to do is to implement authentication process.

Look at `user.manager.js` and `security.js`. Security checks are done on business layer.
Authentication middleware is declared in `routes.js`.
When the user is authenticated the middleware should set user property on the requested object, which is used later on as the context to create managers.
Managers pass the context to `security` service which decides if the user is authenticated or not.

If the user is NOT authenticated and is still attempting to get to the restricted resources, they should get 401 http status code.
The password in database should be encoded with `sha1`.

## API

### Authenticate the user
```
POST /api/user/auth
{email:'', password:''}
```

The expected response is:

```
{token:''}
```

The token is plain value. It should be Base64 encoded and sent as a header to subsequent requests that require authorization.
A sample header for the token is 'abc'.

```
Authorization: Token YWJj
```

## Setup 
To install dependencies from package.json:

    npm install

To run tests in development mode:

    mocha --watch

To run jshint, tests and coverage:

    npm test

To run jshint, tests and coverage with human readable output:

    grunt --force
