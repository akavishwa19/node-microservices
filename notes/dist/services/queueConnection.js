import amqp from "amqplib";
let channel;
async function rabbitMqConnection(url) {
    if (channel) {
        return channel;
    }
    const connection = await amqp.connect(url);
    channel = await connection.createChannel();
    console.log("connected to rabbit MQ queue");
    channel.assertQueue("note_queue", { durable: false });
    return channel;
}
export default rabbitMqConnection;
//# sourceMappingURL=queueConnection.js.map