require("dotenv").config();
const {Client} = require("discord");
const client = new Client({partials: ["MESSAGE", "GUILDS"]});

client.on("ready", () => {
    client.user.setActivity({
        type: "PLAYING",
        name: "Testing 1.0"
    })
});

client.login(process.env.token);