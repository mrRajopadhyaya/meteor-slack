import "./index.html";
import $ from "jquery";
// Meteor.subscribe("allUsers");

Template.MessengerArea.helpers({
  newMessage() {
    message = $(".message-input input").val();
    if ($.trim(message) == "") {
      return false;
    }
    $(
      '<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' +
        message +
        "</p></li>"
    ).appendTo($(".messages ul"));
    $(".message-input input").val(null);
    $(".contact.active .preview").html("<span>You: </span>" + message);
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");
  },
  usersList() {
    return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
  }
});

Template.MessengerArea.events({
  "#test-btn click": function() {
    debugger;
  }
});
