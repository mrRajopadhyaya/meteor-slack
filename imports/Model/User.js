import { Class } from "meteor/jagi:astronomy";
import Users from "../imports/collections/users";

const User = Class.create({
  name: "User",
  collection: Users,
  secured: false
});

export default User;
