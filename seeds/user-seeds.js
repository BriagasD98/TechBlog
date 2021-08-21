const { User } = require('../models')

const userData = [
    {
        username: 'DarthHater12',
        email: 'sithlaw@DarkSide.com',
        password: 'techblog1'
    },
    {
        username: 'LukeFlySwatter',
        email: 'Lskywalker@theforce.com',
        password: 'techblog2'
    },
    {
        username: 'JarJarStinks',
        email: 'JJBinks@starwars.com',
        password: 'techblog3'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;