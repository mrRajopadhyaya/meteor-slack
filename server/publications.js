import Messages from "../imports/collections/messages";
import Rooms from "../imports/collections/rooms";

Meteor.publish("allMessages", function() {
  return Messages.find();
});

Meteor.publish("allUsers", function() {
  return Meteor.users.find();
});

Meteor.publish("allRooms", function() {
  return Rooms.find({ participants: { $in: [Meteor.userId()] } });
});
