import "./index.html";
export const Messages = new Mongo.Collection("messages");

Template.footer.events({
  "keypress input": function(event) {
    if (event.charCode == 13) {
      event.stopPropagation();
      const textMessage = event.target.value;
      Messages.insert({ body: textMessage });
      $(".input-box_text").val("");
      return false;
    }
  }
});
