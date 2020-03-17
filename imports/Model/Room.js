import { Class } from "meteor/jagi:astronomy";
import Rooms from "../collections/rooms";
import Message from "./Message";
// import User from "./User";

// console.log(this, "this inside room.js");

const Room = Class.create({
  name: "Room",
  collection: Rooms,
  secured: false,
  fields: {
    name: {
      type: String
    },
    createdBy: {
      type: String,
      default() {
        return Meteor.userId;
      }
    },
    createdAt: {
      type: Date,
      default() {
        return Date.now();
      }
    },
    message: {
      type: [Message],
      optional: true
    },
    participants: {
      type: [String],
      default() {
        return [Meteor.userId()];
      }
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
