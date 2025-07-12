/** @format */

module.exports = {
  token:
    "MTM5MjgxNjQ1MTU1MDcwNzc0NA.GNvSyp.WI404xaxmzT2dAhZxbLH8T5SYxIyPS-cuDawJY",
  prefix: "?",
  ownerID: "504232260548165633",
  SpotifyID: "",
  SpotifySecret: "",
  mongourl:
    "",
  embedColor: "#2f3136",
  logs: "",
  node_source: "ytsearch",
  topgg:
    "",
  links: {
    BG: "https://cdn.discordapp.com/attachments/1061636453437804544/1186002755924525166/20231217_232106.jpg",
    support: "https://discord.gg/urV9mkfW9t",
    invite:
      "https://discord.com/api/oauth2/authorize?client_id=1033496708992204840&permissions=824671333721&scope=bot",
    arrkiii:
      "https://cdn.discordapp.com/attachments/1187323477032697867/1236626903847407696/Arrkiii.gif",
    power: "Powered By Arrkiii Development 🌙",
    vanity: "discord.gg/urV9mkfW9t",
    guild: "1325384856477368420",
    topgg: "https://top.gg/bot/1033496708992204840/vote",
  },
  Webhooks: {
      black: "",
    player_create:
      "",
    player_delete:
      "",
    guild_join:
      "",
      guild_leave: "",
    cmdrun:
 "",
  },

  nodes: [
    {
       url: process.env.NODE_URL || "",
      name: process.env.NODE_NAME || "",
      auth: process.env.NODE_AUTH || "",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
