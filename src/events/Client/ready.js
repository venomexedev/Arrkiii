/** @format */

const { prefix } = require("../../config.js");
const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  run: async (client) => {
    const owner = client.users.cache.get(client.owner);
    const user = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    client.logger.log(`Made By ${owner.displayName}`, "ready");
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(
      `Ready on ${client.guilds.cache.size} servers, for a total of ${user} users`,
      "ready",
    );
    const statuses = [
      ">help | >play",
      "Arrkiii Development <3",
      "Trusted By " + client.numb(user) + " Users",
      client.config.links.vanity,
    ];
    setInterval(function () {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: ActivityType.Listening });
    }, 10000);
  },
};
