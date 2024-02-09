import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const user = useSelector(selectLoggedInUser);
  console.log(user);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return <div>{children}</div>
}

export default Protected;
