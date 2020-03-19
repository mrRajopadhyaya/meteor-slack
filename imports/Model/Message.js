import { Class } from "meteor/jagi:astronomy";
import Messages from "../collections/messages";

const Message = Class.create({
  name: "Message",
  collection: Messages,
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
    body: {
      type: String
    },
    createdBy: {
      type: String
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
