import { channel } from "../index.js";
import { deleteDescriptionsViaNoteQuery } from "../utils/sqlQueries.js";
import { pool } from "../db/index.js";
function subscribeToQueueAndDeleteDescriptions() {
    try {
        channel.consume("note_queue", async (message) => {
            const note_id = message?.content.toString();
            console.log(note_id);
            await pool.query(deleteDescriptionsViaNoteQuery(note_id));
            channel.ack(message);
        });
    }
    catch (error) {
        console.log(error);
        throw new Error("some error occured");
    }
}
export default subscribeToQueueAndDeleteDescriptions;
//# sourceMappingURL=subDescriptionDeletion.js.map