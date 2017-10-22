module.exports = {
    database: {
        host: 'localhost',
        port: '27017',
        adminDbName: 'admin',
        commentsDBName: 'Commentsdb',
        collectionName: 'comments',
        adminUser: {
            userName: 'admin',
            pswd: 'rap2el'
        },
        CommentsDBUser : {
            userName: 'commentsdbUser',
            pswd: 'password'
        }
    },
    server: {
        host: 'localhost',
        port: '3000'
    }
}