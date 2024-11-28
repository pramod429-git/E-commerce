import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>SomeThing Went Wrong!!</h2>
      <h3>
        {err.status}:{err.statusText}
        <hr />
      </h3>
      <h3>{err.data}</h3>
    </div>
  );
};
export default Error;
