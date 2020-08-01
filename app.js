const redis = require("redis");
const client = redis.createClient();

console.log("working...");

client.on("error", (error) => {
  console.error(error);
});

client.set("user_name", "Mehmet Fethi", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("message", message);
});

client.get("user_name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("message", message);
});

//delete
client.del("user_name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("Delete?", message);
});

//exists
client.exists("user_name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("exists", message);
});

//append
client.append("last_name", "Meşe", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("Append", message);

  client.get("last_name", (e, m) => {
    console.log("Okunan", m);
  });
});

client.on("message", (channel, message) => {
  console.log(`${channel} isimli kanala ${message} geldi...`);
});

client.subscribe("channel1");
