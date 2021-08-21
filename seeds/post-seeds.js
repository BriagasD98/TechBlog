const { Post } = require('../models')

const postData = [
    {
        title: 'What the Force?',
        post_text: 'Find out what the Force is up now!',
        user_id: '1'
    },
    {
        title: 'Hoth: Greatest Snow Cones',
        post_text: 'Find out why their snow cones are so good!',
        user_id: '2'
    },
    {
        title: 'Forest Moon of Endor',
        post_text: 'Ewoks are cool.',
        user_id: '3'
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;