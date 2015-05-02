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

Where the token is plain value. It should be Base64 encoded end sent as header on subsequent requests that require authorization. Sample header for
token 'abc'.

```
Authorization: Token YWJj
```
 
##Setup
`npm test` to run tests

`npm start` to run the app
