import SimpleSchema from "simpl-schema";

export const Messages = new Mongo.Collection("messages");

MessagesSchema = new SimpleSchema({
  body: {
    label: "body",
    type: String
  },
  author: {
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
  seen: {
    type: Boolean,
    label: "Seen",
    autoValue: function() {
      return false;
    }
  }
});

Messages.attachSchema(MessagesSchema);
