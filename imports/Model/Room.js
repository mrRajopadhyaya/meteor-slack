import { Class } from "meteor/jagi:astronomy";
import Rooms from "../collections/rooms";
import Message from "./Message";
// import User from "./User";

// console.log(this, "this inside room.js");

const Room = Class.create({
  name: "Room",
  collection: Rooms,
  secured: false,
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: "createdAt",
      hasUpdatedField: true,
      updatedFieldName: "updatedAt"
    }
  },
  fields: {
    name: {
      type: [String]
    },
    createdBy: {
      type: String
    },
    message: {
      type: [Message],
      optional: true
    },
    participants: {
      type: [String]
    },
    type: {
      type: String,
      default() {
        return "Private";
      }
    }
  }
});

export default Room;
