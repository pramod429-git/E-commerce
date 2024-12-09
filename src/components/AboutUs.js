import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("parent constuctor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>AboutUs</h1>
        <UserClass
        // name={"child"}
        // location={"Mangalore"}
        // contact={"18kppramod@gmail.com"}
        />

        {/* <UserClass
          name={"Child2"}
          location={"Mangalore"}
          contact={"18kppramod@gmail.com"}
        /> */}
      </div>
    );
  }
}
export default AboutUs;

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>AboutUs</h1>
//       <UserClass
//         name={"Pramod Kumar K"}
//         location={"Mangalore"}
//         contact={"18kppramod@gmail.com"}
//       />
//     </div>
//   );
// };
// export default AboutUs;
