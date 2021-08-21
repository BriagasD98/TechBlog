const { Comment } = require('../models')

const commentData = [
    {
        comment_text: 'Nothing cool about the force tbh.',
        user_id: '1',
        post_id: '1'
    },
    {
        comment_text: 'FYI Dont try the lemon snow cones.',
        user_id: '2',
        post_id: '2'
    },
    {
        comment_text: 'Hug an Ewok to make him yeehaw.',
        user_id: '3',
        post_id: '3'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;