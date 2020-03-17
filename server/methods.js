import Room from "../imports/Model/Room";
import Rooms from "../imports/collections/rooms";
import Message from "../imports/Model/Message";

Meteor.methods({
  showData(user) {
    const room = new Room();
    const participants = [user._id, Meteor.userId()];
    const conversation = Rooms.find({ type: "Private", participants });
    if (!conversation.fetch().length) {
      room.set("name", user.emails[0].address);
      room.set("participants", []); // This line is necessary because we defined default value for the "source" field.
      room.participants.push(user._id);
      room.participants.push(Meteor.userId());
      room.save();
    }
  },
  getMessageHistory(roomId) {
    console.log("here..");
    const messages = Message.find({ roomId }).fetch();
    console.log(messages, "@@messages");
    // return Message.find({ roomId });
    return messages;
  }
});
