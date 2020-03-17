import { Template } from "meteor/templating";
import "./index.html";
import { Session } from "meteor/session";

Template.room.onCreated(function() {});

Template.room.events({
  "click #room-display": function(e) {
    const roomId = Template.instance().data.id;
    Session.set("currentRoomId", roomId);
  }
});
