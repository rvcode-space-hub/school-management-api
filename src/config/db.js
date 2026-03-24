import mysql from 'mysql2/promise';
import env from './env.js'

let db;

export const connectDB = async () => {
    try {
        db = await mysql.createConnection({
            host: env.db_host,
            user: env.db_user,
            database: env.db_database,
            password: env.db_password,
        })
        console.log("✅ DB Connected");

    } catch (error) {
        console.log("❌ DB Connection Failed:", error.message);
        process.exit(1); // app crash kar do agar DB fail
    }

}

export { db };