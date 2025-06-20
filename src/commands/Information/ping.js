const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
} = require('discord.js');

module.exports = {
  name: "ping",
  category: "Information",
  description: "Shows bot latency",
  execute: async (client, message) => {
    if (!message.channel) return;

    try {
      const initialEmbed = new EmbedBuilder()
        .setTitle('Avon – Ping Check')
        .setDescription('📍 Calculating ping...')
        .setColor('#5865F2');

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId('refresh_ping')
          .setLabel('Refresh')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('close_ping')
          .setLabel('Close')
          .setStyle(ButtonStyle.Danger)
      );

      const sentMessage = await message.channel.send({
        embeds: [initialEmbed],
        components: [row],
      });

      const collector = sentMessage.createMessageComponentCollector({
        componentType: ComponentType.Button,
        time: 60_000,
      });

      collector.on('collect', async interaction => {
        if (interaction.user.id !== message.author.id) {
          return interaction.reply({
            content: 'Only you can click this!',
            ephemeral: true,
          });
        }

        if (interaction.customId === 'refresh_ping') {
          const botPing = Date.now() - message.createdTimestamp;
          const apiPing = client.ws.ping;

          const updatedEmbed = EmbedBuilder.from(initialEmbed).setDescription(
            `🏓 **Bot:** \`${botPing}ms\`\n🌐 **API:** \`${apiPing}ms\``
          );

          await interaction.update({ embeds: [updatedEmbed] });
        }

        if (interaction.customId === 'close_ping') {
          collector.stop();
          await interaction.update({
            content: 'Ping panel closed.',
            embeds: [],
            components: [],
          });

          // Optional: Delete the message after a delay
          setTimeout(() => {
            sentMessage.delete().catch(() => {});
          }, 3000);
        }
      });

      collector.on('end', () => {
        if (!sentMessage.deleted) {
          sentMessage.edit({ components: [] }).catch(() => {});
        }
      });

    } catch (err) {
      console.error("Error executing ping command:", err);
      if (message.channel) {
        message.channel.send("❌ An error occurred while executing the command.").catch(() => {});
      }
    }
  }
};
