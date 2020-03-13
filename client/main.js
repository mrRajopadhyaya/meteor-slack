import { Template } from "meteor/templating";
import "bootstrap/dist/js/bootstrap.bundle";
import { ReactiveVar } from "meteor/reactive-var";
import "./main.html";
import "./layouts/HomeLayout.html";
import "./templates/footer";
import "./templates/header";
import "./templates/room";
import "./templates/login";
import "./templates/listings";
import "./templates/messageContainer";
import "./templates/message";
import "./routes";

// Meteor.subscribe("messages");

// console.log(Message, "allmessage");

const Messages = new Mongo.Collection("messages");

Meteor.subscribe("allMessages", {
  onReady: function() {
    console.log(Messages.find().fetch(), "message data");
  }
});
// console.log(Messages.find().fetch(), "@@@@messages");

Template.HomeLayout.onCreated(function() {
  // console.log(Messages.find().fetch(), "client Message");
});
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
