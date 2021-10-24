import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
// await db.read();

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { rooms: [] };

// Write db.data content to db.json
// await db.write();

export const database = db.data;

export function getRoom(roomId, user) {
  const room = {
    id: roomId,
    state: "idle",
    players: [],
  };

  const match = database.rooms.find((r) => roomId === r.id);
  if (match) {
    match.players.push(user);
  } else {
    room.players.push(user);
    database.rooms.push(room);
  }

  return room;
}
