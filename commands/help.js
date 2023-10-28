const Discord = require('discord.js')

module.exports = {
  name: 'help',
  aliases: ['h', 'cmd', 'command'],
  run: async (client, message) => {
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Commands')
          .setDescription(client.commands.map(cmd => `\`${cmd.name}${cmd.aliases ? `(${cmd.aliases.join(', ')})` : ''}\``).join(', '))
          .setColor('#0000FF'),
          new Discord.EmbedBuilder()
          .setTitle('Filters')
          .setDescription("off, 3d, bassboost, echo, flanger, gate, haas, karaoke, nightcore, reverse, vaporwave, mcompand, phaser, tremolo, surround, earwax")
          .setColor('#ff00ff'),
          new Discord.EmbedBuilder()
          .setTitle('Repeat/Loop/Rp')
          .setDescription("off, song, queue")
          .setColor('#ff00ff')
      ]
    })
  }
}
