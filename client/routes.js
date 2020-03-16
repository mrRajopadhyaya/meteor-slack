FlowRouter.route("/", {
  name: "root",
  action() {
    BlazeLayout.render("HomeLayout", { main: "MessengerArea" });
  }
});

//   FlowRouter.route("/home", {
//     name: "home",
//     action() {
//     //   if (Meteor.userId && !Meteor.userId()) {
//     //     FlowRouter.go("/login");
//     //   } else {
//         BlazeLayout.render("MainLayout",{main:"room"});
//     //   }
//     }
//   });

FlowRouter.route("/login", {
  name: "login",
  action() {
    BlazeLayout.render("login");
  }
});

//   FlowRouter.route("/register", {
//     name: "register",
//     action() {
//       BlazeLayout.render("register");
//     }
//   });

//   FlowRouter.route("/profile", {
//     name: "profile",
//     action() {
//       BlazeLayout.render("MainLayout",{main:"profile"});
//     }
//   });

//   FlowRouter.route("/edit-profile", {
//     name: "editProfile",
//     action() {
//       BlazeLayout.render("MainLayout",{main:"editProfile"});
//     }
//   });

//   FlowRouter.route("/logout", {
//     name: "logout",
//     action() {
//       Meteor.logout();
//       FlowRouter.go("/login");
//     }
//   });
