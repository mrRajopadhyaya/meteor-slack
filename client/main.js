import { Template } from "meteor/templating";
import "bootstrap/dist/js/bootstrap.bundle";
import "./main.html";
import "./layouts/HomeLayout.html";
import "./templates/footer";
import "./templates/header";
import "./templates/room";
import "./templates/login";
import "./templates/RoomList";
import "./templates/messageContainer";
import "./templates/MessengerArea";
import "./templates/message";
import "./templates/UsersList";
import "./routes";
import "./subscription";

Template.HomeLayout.onCreated(function() {});
