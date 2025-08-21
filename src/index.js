'use strict'

module.exports = {
  db: {
    database: process.env.DB_NAME || 'accentus',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '12345678',
    host: process.env.DB_HOST || 'localhost',
    env: process.env.NODE_ENV || 'development'
  },
  server: {
    port: process.env.PORT || 8001,
    env: process.env.NODE_ENV || 'development',
    localUrl: 'https://bath-core-seo-walls.trycloudflare.com',
    productionUrl: 'https://api.accentus.com'
  },
  mongo: {
    env: process.env.NODE_ENV || 'development',
    localUrl: '2.tcp.ngrok.io:15245/accentus',
    productionUrl: 'mongo:carmenunt1@unt_accentus:27017/?tls=false'
  },
  auth: {
    secret: process.env.SECRET || 'multiagent'
  },
  dash: {
    env: process.env.NODE_ENV || 'development',
    localUrl: 'http://localhost:3000',
    productionUrl: 'https://accentus.com'
  },
  media: {
    port: process.env.PORT || 8002,
    env: process.env.NODE_ENV || 'development',
    localUrl: 'http://localhost:8002',
    productionUrl: 'https://media.accentus.com'
  }
}