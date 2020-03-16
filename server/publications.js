import { Messages } from "../collections/messages";
import { Rooms } from "../collections/rooms";

Meteor.publish("allMessages", function() {
  return Messages.find();
});

Meteor.publish("allUsers", function() {
  return Meteor.users.find();
});

Meteor.publish("allRooms", function() {
  return Rooms.find();
});
