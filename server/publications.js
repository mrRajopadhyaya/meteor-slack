import { Messages } from "../collections/messages";

Meteor.publish("allMessages", function() {
  return Messages.find();
});

Meteor.publish("allUsers", function() {
  return Meteor.users.find();
});
