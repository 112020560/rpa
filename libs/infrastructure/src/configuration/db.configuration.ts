/* eslint-disable prettier/prettier */
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    //poert:1433, 
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false, // change to true for local dev / self-signed certs
    },
  },
});
