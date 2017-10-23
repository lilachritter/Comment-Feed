# Comment-Feed
Simple comment feed app using mongodb-node-express-react-redux.

### In order to run the app, make sure you have installed:
1. Node.JS : https://nodejs.org/en/download/
2. MongeDB : https://www.mongodb.com/download-center#community

**Important:** don't forget to add mongo to your path variable (cant execute 4 without it) https://www.computerhope.com/issues/ch000549.htm

### Install and run the app:
1. Clone git repository
2. Run npm install inside repo directory
3. Run mongo service (execute mongod command, make sure it is in you system path variable, see 2)
4. Setup db - run npm run create-db (this will create a new db called Commentsdb and a collection called comments)
**Important:** if you already have mongodb installed from before this app, you will need to connect with admin user and password in order to create new db, users and collections.
In order to do that:
- Open /config.js and replace database.adminUser credentails:
```javascript
adminUser: {
    userName: <your mongodb admin username>,
    pswd: <your mongodb admin password>
    }
```
- Run npm run create-db 
- If you already have a db set up, that you would like to use, open /config.js and replace:
```javascript
database: {
  commentsDBName: <insert name of db you would like to use>,
  ...
  CommentsDBUser: {
            userName: <your db username>,
            pswd: <your db password>
        }
}
```
5. Run npm start
6. Navigate to https://localhost:3000
7. In order to run build and watch mode run npm run build
