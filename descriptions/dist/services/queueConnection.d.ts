import amqp from "amqplib";
declare function rabbitMqConnection(url: string): Promise<amqp.Channel>;
export default rabbitMqConnection;
//# sourceMappingURL=queueConnection.d.ts.map