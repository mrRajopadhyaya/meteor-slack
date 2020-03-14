import "./index.html";
Meteor.subscribe("allUsers");

Template.listings.helpers({
  usersList() {
    console.log(Meteor.users.find().fetch(), "@@@@users...");
    return Meteor.users.find().fetch();
  }
});
