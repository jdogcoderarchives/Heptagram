const dbLogging = require("../dbLogging");

module.exports = async (Discord, client, messageReaction, user) => {
	try {
		const auditLogs = await messageReaction.message.guild.fetchAuditLogs({
			limit: 1,
			type: "MESSAGE_REACTION_REMOVE",
		});
		const log = auditLogs.entries.first();
		const data = {
			action: "MESSAGE_REACTION_REMOVE",
			user,
			channel: message.channel.name,
			...messageReaction,
			log,
		};
		dbLogging(data, messageReaction.message.guild.name);
	} catch (err) {
		console.error(err);
	}
};