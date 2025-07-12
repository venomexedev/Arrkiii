/** @format */

module.exports = {
  token:
    "MTM5MjgxNjQ1MTU1MDcwNzc0NA.GNvSyp.WI404xaxmzT2dAhZxbLH8T5SYxIyPS-cuDawJY",
  prefix: "?",
  ownerID: "840144975349153793",
  SpotifyID: "85aab1d51a174aad9eed6d7989f530e6",
  SpotifySecret: "b2ad05aa725e434c88776a1be8eab6c2",
  mongourl:
    "mongodb+srv://venomexe:phoenixdev@cluster0.kmrvssa.mongodb.net/?retryWrites=true&w=majority",
  embedColor: "#2f3136",
  logs: "",
  node_source: "ytsearch",
  topgg:
    "",
  links: {
    BG: "https://cdn.discordapp.com/attachments/1370403403854905467/1393547472139456562/standard_7.gif?ex=687391b8&is=68724038&hm=e5c0c0f455182cd2863adb51efe0cab40c968fe1e1e7b243e337e4c317d168cc&",
    support: "https://discord.gg/SbDMUJy5rW",
    invite:
      "https://discord.com/oauth2/authorize?client_id=1392816451550707744&permissions=8&integration_type=0&scope=bot+applications.commands",
    arrkiii:
      "https://cdn.discordapp.com/attachments/1370403403854905467/1393547472139456562/standard_7.gif?ex=687391b8&is=68724038&hm=e5c0c0f455182cd2863adb51efe0cab40c968fe1e1e7b243e337e4c317d168cc&",
    power: "Powered By FlaZe Development 🌙",
    vanity: "discord.gg/SbDMUJy5rW",
    guild: "",
    topgg: "https://top.gg/bot/1392816451550707744/vote",
  },
  Webhooks: {
      black: "https://discord.com/api/webhooks/1393555723002183742/4Kjqglx6OnoIuUPLK30WXqf21W9Rk02fPONa1Y6G-hRzJlA_Xe1T98O5eIWANFOchWkw",
    player_create:
      "https://discord.com/api/webhooks/1393555723002183742/4Kjqglx6OnoIuUPLK30WXqf21W9Rk02fPONa1Y6G-hRzJlA_Xe1T98O5eIWANFOchWkw",
    player_delete:
      "https://discord.com/api/webhooks/1393555723002183742/4Kjqglx6OnoIuUPLK30WXqf21W9Rk02fPONa1Y6G-hRzJlA_Xe1T98O5eIWANFOchWkw",
    guild_join:
      "https://discord.com/api/webhooks/1393555723002183742/4Kjqglx6OnoIuUPLK30WXqf21W9Rk02fPONa1Y6G-hRzJlA_Xe1T98O5eIWANFOchWkw",
      guild_leave: "https://discord.com/api/webhooks/1393555723002183742/4Kjqglx6OnoIuUPLK30WXqf21W9Rk02fPONa1Y6G-hRzJlA_Xe1T98O5eIWANFOchWkw",
    cmdrun:
 "https://discord.com/api/webhooks/1393555723002183742/4Kjqglx6OnoIuUPLK30WXqf21W9Rk02fPONa1Y6G-hRzJlA_Xe1T98O5eIWANFOchWkw",
  },

  nodes: [
    {
       url: process.env.NODE_URL || "lava-all.ajieblogs.eu.org:80",
      name: process.env.NODE_NAME || "FlaZe",
      auth: process.env.NODE_AUTH || "https://dsc.gg/ajidevserver",
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
