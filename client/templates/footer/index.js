import './index.html';

Template.footer.events({
    'keypress input': function(event) {
          if (event.charCode == 13) {
              event.stopPropagation();
              const textMessage = event.target.value;
              console.log(textMessage,"message value");
              $('.input-box_text').val("");
              return false;
          }
      }
  });