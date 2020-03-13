Meteor.publish("allMessages", function() {
  return Messages.find();
});
