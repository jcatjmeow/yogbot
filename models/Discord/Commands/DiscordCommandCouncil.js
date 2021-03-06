const DiscordCommand = require('../DiscordCommand.js');
var Discord = require('discord.js');

class DiscordCommandCouncil extends DiscordCommand {

    constructor(subsystem) {
        super("Council", "Pictures of the goings-on at the top of the hiearchy", undefined, subsystem, true);
    }

    onRun(message, permissions, args) {
        var responses = [
          "https://i.imgur.com/8PQmYdL.png"
        ];
        var response = responses[Math.floor(Math.random() * responses.length)];
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
	
        const embed = new Discord.RichEmbed()
          .setColor('#'+randomColor) // Random Color
          .setTitle('Council Image') // Set to title whenever it is added
          .setImage(response)
          //.setFooter(author) // Uncomment when we have authors

        message.channel.send(embed);
    }

}

module.exports = DiscordCommandCouncil;
