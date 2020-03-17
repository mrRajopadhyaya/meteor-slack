import "./index.html";
// import $ from "jquery";
// Meteor.subscribe("allUsers");

Template.MessengerArea.helpers({
  usersList() {
    return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
  },
  currentRoomTitle() {
    return Session.get("currentRoomTitle");
  }
});
