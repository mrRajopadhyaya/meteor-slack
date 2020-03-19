import { Template } from "meteor/templating";
import "./index.html";
import { Session } from "meteor/session";

Template.room.onCreated(function() {});

Template.room.helpers({
  title() {
    const ownEmail = Meteor.user().emails[0].address;
    const roomData = Template.instance().data.roomData;
    const title = roomData.name.filter(email => {
      return email !== ownEmail;
    });
    return title;
  }
});

Template.room.events({
  "click #room-display": function(e) {
    console.log(Template.instance().data, "@@@@Clicked data");
    const roomId = Template.instance().data.roomData._id;
    const currentRoomTitle = Template.instance().data.title;
    debugger;
    Session.set("currentRoomId", roomId);
    Session.set("currentRoomTitle", currentRoomTitle);
    Meteor.call("getMessageHistory", roomId, function(error, response) {
      debugger;
      // Session.set('messages',response);
      console.log(error, "@@error");
      console.log(response, "@@response");
    });
  }
});
