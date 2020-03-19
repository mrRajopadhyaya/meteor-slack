import Room from "../imports/Model/Room";
import Rooms from "../imports/collections/rooms";
import Message from "../imports/Model/Message";

Meteor.methods({
  createRoom(user) {
    const room = new Room();
    const participants = [user._id, Meteor.userId()];
    // const conversation = Rooms.find({ type: "Private", participants });
    const roomExists = Rooms.find({
      participants: { $all: participants }
    }).fetch();
    console.log(roomExists, "@@@this should not be run");
    if (!roomExists.length) {
      console.log("inside if");
      room.set("name", []);
      room.set("participants", []); // This line is necessary because we defined default value for the "source" field.
      room.name.push(user.emails[0].address);
      room.name.push(Meteor.user().emails[0].address);
      room.set("createdBy", Meteor.userId());
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
  },
  saveMessage(msg) {
    const message = new Message();
    console.log(msg, "@@msg");
    message.set("roomId", msg.roomId);
    message.set("body", msg.body);
    message.set("createdBy", Meteor.userId());
    message.save();
    Rooms.insert({"name" : ["aquaman@gmail.com","batman@gmail.com","superman@gmail.com"],"createdBy" : "YWebZYcuhLtxRoJ5J","participants" : ["YWebZYcuhLtxRoJ5J","xiQNiZpXhLNkNFk3z","GJ37FbnFheWkdNwFj"],"type" : "Public"})
  }
});


