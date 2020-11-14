const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true,
}

const leaderboardSchema = mongoose.Schema({
    _id: reqString,
    channelId: reqString,
})

module.exports = mongoose.model('leaderboard', leaderboardSchema)