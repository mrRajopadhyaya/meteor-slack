import { Template } from "meteor/templating";
import "bootstrap/dist/js/bootstrap.bundle";
import "./main.html";
import "./layouts/HomeLayout.html";
import "./templates/footer";
import "./templates/header";
import "./templates/room";
import "./templates/login";
import "./templates/listings";
import "./templates/messageContainer";
import "./templates/message";
import "./templates/UsersList";
import "./routes";

Meteor.subscribe("allMessages", {
  onReady: function() {
    // console.log(Messages.find().fetch(), "message data");
  }
});
// console.log(Messages.find().fetch(), "@@@@messages");

Template.HomeLayout.onCreated(function() {
  // console.log(Messages.find().fetch(), "client Message");
});
