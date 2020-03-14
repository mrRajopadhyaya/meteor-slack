import "./index.html";
import { Messages } from "../footer";
// import { Messages } from "../../../collections/messages";

Template.messageContainer.onCreated(() => {});

Template.messageContainer.helpers({
  messages() {
    console.log(Messages.find().fetch(), "@@@messages");
    return Messages.find().fetch();
  }
});
