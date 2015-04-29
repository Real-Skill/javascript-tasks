#NodeJS - simple security

This task test your skills in writing application in NodeJS with framework expressJS and using mongoose/mongoose-q to integrate with mongoDB. You have prepared routes 
and requests are config. You have to write authentication and authorization.

##Authenticate
* in file **routes** you must complete function **authenticate**, when request have header authorization it should takes this header and decode Base64 and should call **next**.
* When user NOT exist in DB should throw exception. Password in DB should be code sha1.
* In layer manager You must check is user exist in request.
 
 Good luck!