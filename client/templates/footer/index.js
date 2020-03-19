import "./index.html";
import { Session } from "meteor/session";
export const Messages = new Mongo.Collection("messages");

Template.footer.events({
  "keypress input": function(event) {
    if (event.charCode == 13) {
      event.stopPropagation();
      const textMessage = event.target.value;
      const currentRoom = Session.get("currentRoomId");
      console.log(currentRoom, "@@currentRoom");
      const msg = {
        roomId: currentRoom,
        body: textMessage
      };
      Meteor.call("saveMessage", msg, function(err, res) {
        console.log(err, "@@errorsaving message");
        console.log(res, "@@successsaving message");
      });
      // Messages.insert(
      //   {
      //     roomId: currentRoom,
      //     body: textMessage,
      //     createdBy: Meteor.userId()
      //   },
      //   function(err, res) {
      //     console.log(err, "@err");
      //     console.log(res, "@res");
      //   }
      // );

      document.getElementById("input-box_text").value = "";
      return false;
    }
  }
});
