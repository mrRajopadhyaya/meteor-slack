import { Class } from "meteor/jagi:astronomy";
import Messages from "../collections/messages";

const Message = Class.create({
  name: "Message",
  collection: Messages,
  secured: false,
  fields: {
    body: {
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
    seen: {
      type: Boolean,
      default() {
        return false;
      }
    },
    roomId: {
      type: String
    }
  }
});

export default Message;
