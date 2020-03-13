import { Meteor } from "meteor/meteor";
import { Messages } from "../collections/messages";
import "./publications";

Meteor.startup(() => {
  // console.log(Messages.find().fetch(), "messages");
  // Meteor.publish("messages", function() {
  //   return Messages.find();
  // });
  // Messages.insert({ body: "this is text" });
  // code to run on server at startup
});
