import "./index.html";
export const Rooms = new Mongo.Collection("rooms");
Template.userList.onCreated(() => {});

Template.userList.events({
  "click #username": function(events, template) {
    Rooms.insert(
      {
        name: this.user.emails[0].address,

        // prettier-ignore
        '$push': {
          'participants.$': "test1"
        }
      },
      function(error, res) {
        console.log(error, "@@insert error");
        console.log(res, "@@insert res");
      }
    );
    console.log(this, "@@@this");
  }
});

/*
{
        // push block - add message array element
        $push: {
          participants: {
            $each: ["test", "test1"]
          }
        }*/
