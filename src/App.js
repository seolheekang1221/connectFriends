import Login from "./features/Login";
import Logout from "./features/Logout";
import SignUp from "./features/SignUp";
import ForgotPassword from "./features/ForgotPassword";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"


const App = () => {
  const user = useSelector(selectUser);

  return (
  <div>
    { user ? <Logout/> : <Login/>}
  </div>
  );
};

export default App;
