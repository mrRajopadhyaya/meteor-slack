import { Template } from "meteor/templating";
import "./index.html";
import { Session } from "meteor/session";

Template.room.onCreated(function() {});

Template.room.events({
  "click #room-display": function(e) {
    console.log(Template.instance().data, "@@@@Clicked data");
    const roomId = Template.instance().data.id;
    const currentRoomTitle = Template.instance().data.title;
    Session.set("currentRoomId", roomId);
    Session.set("currentRoomTitle", currentRoomTitle);
    Meteor.call("getMessageHistory", roomId, function(error, response) {
      console.log(error, "@@error");
      console.log(response, "@@response");
    });
  }
});
