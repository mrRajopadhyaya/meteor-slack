Meteor.subscribe("allMessages", {
  onReady: function() {
    // console.log(Messages.find().fetch(), "message data");
  }
});

Meteor.subscribe("allRooms");
