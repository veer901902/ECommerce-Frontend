import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";
import { fetchLoggedInUserAsync, selectUserInfo } from "../../user/userSlice";
import { useEffect } from "react";

function Protected({ children }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return <div>{children}</div>;
}

export default Protected;
