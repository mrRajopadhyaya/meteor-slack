import "./index.html";
const Rooms = new Mongo.Collection("rooms");
Template.RoomList.helpers({
  usersList() {
    return Meteor.users.find().fetch();
  },
  Rooms() {
    console.log(Rooms.find().fetch(), "@@@@Rooms");
    return Rooms.find().fetch();
  }
});
