import React from "react";
import { Link } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="user-class">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>

        <h2>
          Contact:
          <Link to={"https://mail.google.com/mail/u/0/#inbox?compose=new"}>
            {contact}
          </Link>
        </h2>
      </div>
    );
  }
}
export default UserClass;
