import "./index.html";
import { Session } from "meteor/session";
export const Messages = new Mongo.Collection("messages");

Template.footer.events({
  "keypress input": function(event) {
    if (event.charCode == 13) {
      event.stopPropagation();
      const textMessage = event.target.value;
      const currentRoom = Session.get("currentRoomId");
      Messages.update({ room: currentRoom }, { $set: { body: textMessage } },function(){});
      $(".input-box_text").val("");
      return false;
    }
  }
});
