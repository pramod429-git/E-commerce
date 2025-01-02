import React from "react";
import { Link } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constuctor");
    this.state = {
      //count1: 0,
      userInfo: {
        name: "dummy",
        location: "default",
        bio: "anything",
      },
    };
  }
  // async componentDidMount() {
  //   console.log("child component did mount");
  //   const data = await fetch("https://api.github.com/users/pramod429-git");
  //   const json = await data.json();

  //   // console.log(json);

  //   this.setState({
  //     userInfo: json,
  //   });
  // }

  componentDidMount() {
    this.timmer = setInterval(() => {
      console.log("mount");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("child component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timmer);
    console.log("child component will unmount");
  }
  render() {
    console.log("child render");
    // const { name, location, contact } = this.props;
    const { name, location, bio } = this.state.userInfo;
    return (
      <div className="user-class">
        {/* <h1>Count: {this.state.count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase Count
        </button>

        {this.state.count1 === 0 || (
          <button
            onClick={() => {
              this.setState({
                count1: this.state.count1 - 1,
              });
            }}
          >
            Decrease Count
          </button>
        )} */}
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Bio: {bio}</h2>
        {/* <h2>
          Contact:
          <Link to={"https://mail.google.com/mail/u/0/#inbox?compose=new"}>
            {contact}
          </Link>
        </h2> */}
      </div>
    );
  }
}
export default UserClass;
