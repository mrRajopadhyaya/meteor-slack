import "./index.html";
import { Session } from "meteor/session";
export const Messages = new Mongo.Collection("messages");

Template.footer.events({
  "keypress input": function(event) {
    if (event.charCode == 13) {
      event.stopPropagation();
      const textMessage = event.target.value;
      const currentRoom = Session.get("currentRoomId");
      Messages.insert(
        {
          roomId: currentRoom,
          body: textMessage
        },
        function(err, res) {
          console.log(err, "@err");
          console.log(res, "@res");
        }
      );
      // Messages.update(
      //   { roomId: currentRoom },
      //   { $set: { body: textMessage } },
      //   function(error, res) {
      //     console.log(error, "@@error");
      //     console.log(res, "@@res");
      //   }
      // );
      $(".input-box_text").val("");
      return false;
    }
  }
});
