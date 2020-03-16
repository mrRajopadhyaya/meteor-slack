import "./index.html";
Meteor.subscribe("allUsers");

Template.RoomList.helpers({
  usersList() {
    console.log(Meteor.users.find().fetch(), "@@@@users...");
    return Meteor.users.find().fetch();
  }
});
