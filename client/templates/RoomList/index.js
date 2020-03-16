import "./index.html";
Meteor.subscribe("allUsers");

Template.RoomList.helpers({
  usersList() {
    return Meteor.users.find().fetch();
  }
});
