import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    const timmer = setInterval(() => {
      console.log("call");
    }, 1000);
    return () => {
      clearInterval(timmer);
    };
  }, []);
  return (
    <div>
      <h1>Contact-Us</h1>
    </div>
  );
};
export default ContactUs;
