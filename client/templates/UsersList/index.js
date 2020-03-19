import "./index.html";
// export const Rooms = new Mongo.Collection("rooms");
Template.userList.onCreated(() => {});

Template.userList.helpers({
  emails() {
    return Template.instance().data.user.emails[0].address;
  }
});

Template.userList.events({
  "click #username": function(events, template) {
    Meteor.call("createRoom", this.user, (error, response) => {
      console.log(response, "@@response");
      console.log(error, "@@error");
    });
  }
});
