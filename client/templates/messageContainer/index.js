import "./index.html";
import { Messages } from "../footer";
import { Session } from "meteor/session";

// import { Messages } from "../../../collections/messages";

Template.messageContainer.onCreated(() => {});

Template.messageContainer.helpers({
  messages() {
    // return messages;
    const roomId = Session.get("currentRoomId");
    console.log(roomId, "@@here");
    // console.log(Messages.find().fetch(), "@@@@messages");
    return Messages.find({ roomId }).fetch();
  }
});
