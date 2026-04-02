import mysql from 'mysql2/promise';
import "dotenv/config"

// Create the connection pool. The pool-specific settings are the defaults
const getConnection = () => {
    const pool = mysql.createPool({
        host: process.env.MYSQL_HOSTNAME,
        port: Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USERNAME,
        database: process.env.MYSQL_DATABASE,
        waitForConnections: true,
        connectionLimit: 1000,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
    });
    return pool
}

// const getConnection = async () => {
//     const conn = await pool.getConnection();
// }

export default getConnection



