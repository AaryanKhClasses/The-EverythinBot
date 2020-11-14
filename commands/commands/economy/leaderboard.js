const leaderboardSchema = require("../../../schemas/leaderboard-schema")

module.exports = {
    commands: ['leaderboard', 'lb'],
    description: 'Leaderboard of Coins!',
    cooldown: 10,
    callback: (message) => {
        // const { guild, channel } = message
        // const guildId = guild.id
        // const channelId = channel.id

        // await leaderboardSchema.findOneAndUpdate(
        //     {
        //         _id: guildId,
        //         channelId,
        //     },
        //     {
        //         _id: guildId,
        //         channelId,
        //     },
        //     {
        //         upsert: true,
        //     }
        // )
    }
}