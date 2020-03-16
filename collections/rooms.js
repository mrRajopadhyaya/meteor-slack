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
    type: [Messages],
    label: "Message"
  },
  participants: {
    type: Array,
    label: "Participants"
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
