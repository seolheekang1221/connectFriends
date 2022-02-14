import Login from "./features/Login";
import Logout from "./features/Logout";
import SignUp from "./features/SignUp";
import Map from "./features/landingPage/Map";
import ForgotPassword from "./features/ForgotPassword";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

// const user = useSelector(selectUser);
// <div>
//   { user ? <Logout/> : <Map />}
// </div>


// const render = (status: Status) => {
//   return Status;
// };

// const App = () => {(<Wrapper apiKey={"AIzaSyBJHKt5qlh_MfHffUk0j8ZXR8NREz-Q6sU"} render={render}>

// <Map />
// </Wrapper>
// );
// const user = useSelector(selectUser);

const App = () => {
  const user = useSelector(selectUser);
  return (
  <div>
  { user ? <Logout/> : <Map />}
</div>
  );
};
export default App;

