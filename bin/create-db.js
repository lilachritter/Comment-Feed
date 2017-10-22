var module = {};
load('config.js');

var config = module.exports;
    dbConf = config.database;
    user = dbConf.CommentsDBUser;
    adminUser = dbConf.adminUser;
    mongoUrl =  dbConf.host + ':' + dbConf.port + '/' + dbConf.adminDbName;

var db = connect(mongoUrl, adminUser.userName, adminUser.pswd);

db = db.getSiblingDB(dbConf.commentsDBName);

db.createUser(
    {
        user: user.userName,
        pwd: user.pswd,
        roles: [
            { role: "readWrite", db: dbConf.commentsDBName }
        ]
    }
);

db.createCollection(dbConf.collectionName);