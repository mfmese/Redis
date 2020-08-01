const redis = require("redis");
const client = redis.createClient();

client.on("error", (error) => {
  console.error(error);
});

client.publish("channel1", "Merhaba nasılsınız?", (e, number) => {
  console.log(`Mesaj ${number} kişiye gönderildi...`);
});
