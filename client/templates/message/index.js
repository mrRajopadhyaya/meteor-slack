import "./index.html";

Template.message.helpers({
  dynamicClass() {
    const createdUser = Template.instance().data.createdBy;
    if (createdUser === Meteor.userId()) {
      return "replies";
    } else {
      return "sent";
    }
  }
});
