import SimpleSchema from "simpl-schema";
import { Messages } from "./messages";

export const Rooms = new Mongo.Collection("rooms");

RoomsSchema = new SimpleSchema({
  name: {
    label: "Name",
    type: String
  },
  createdBy: {
    label: "Author",
    type: String,
    autoValue: function() {
      return this.userId;
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    }
  },
  message: {
    type: Array,
    label: "Message",
    optional: true
  },
  "message.$": {
    type: Messages
  },
  participants: {
    type: Array,
    label: "Participants",
    optional: true
  },
  "participants.$": {
    type: String
  },
  type: {
    type: String,
    label: "Room type",
    autoValue: function() {
      return "private";
    }
  }
});

Rooms.attachSchema(RoomsSchema);
