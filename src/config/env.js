import dotenv from 'dotenv'
dotenv.config();

const env = {
port:process.env.PORT ||9000,
db_host:process.env.DB_HOST,
db_database:process.env.DB_DATABASE,
db_password:process.env.DB_PASSWORD,
db_user:process.env.DB_USER,

}

export default env;

