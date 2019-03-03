const config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: 'localhost\\SQLEXPRESS', 
    database: 'Log',
    options: {
        encrypt: true //使用windows azure，需要设置次配置。
    }
}

const sql = require('mssql') //声明插件
sql.connect(config).then(() => {
    return sql.query`select * from out where id = ${value}`
}).then(result => {
    //请求成功
    console.log(result)
}).catch(err => {
    //err 处理
    console.log(err)
})
sql.on('error', err => {
    //error 处理
    console.log(err)
})