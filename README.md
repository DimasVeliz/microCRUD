# This is a microservice that handles all the CRUD operations for a MongoDB database

## to run this app:
... update the configuration file by specifing Port and MongoURI
```
$ npm install
$ cd config
$ mv config.dev.env config.env
$ cd .. 
$ npm run dev
```

## The endpoints to hit are:

```
http:localhost:PORT/api/book
http:localhost:PORT/api/article

```