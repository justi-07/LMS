import "./App.css";
import Home from "../src/Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import AdminHome from "./Components/Admin/AdminHome";
import AdminHeader from "./Components/Admin/AdminHeader";
import AddMember from "./Components/Admin/AddMember";
import ViewMember from "./Components/Admin/ViewMember";
import AddBooks from "./Components/Admin/AddBooks";
import ViewBook from "./Components/Admin/ViewBook";
import MemberHome from "./Components/Member/MemberHome";
import ViewBooks from "./Components/Member/ViewBooks";
import ViewBookings from "./Components/Member/ViewBookings";
import ViewHistory from "./Components/Member/ViewHistory";
import ViewBookingHistory from "./Components/Admin/ViewBookingHistory";
function App() {

  return (
    <div className="App">
      <Routes>
        {/* --- Routing --- */}
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>

        {/* --- Admin  --- */}
        <Route exact path="/Admin/adminHome" element={<AdminHome />}></Route>
        <Route exact path="/Admin/addMember" element={<AddMember />}></Route>
        <Route exact path="/Admin/addBook" element={<AddBooks />}></Route>
        <Route exact path="/Admin/viewMember" element={<ViewMember />}></Route>
        <Route exact path="/Admin/viewBook" element={<ViewBook />}></Route>
        <Route
          exact
          path="/Admin/viewAllHistory"
          element={<ViewBookingHistory />}
        ></Route>

        {/* --- Member  --- */}
        <Route exact path="/Member/memberHome" element={<MemberHome />}></Route>
        <Route exact path="/Member/viewBook" element={<ViewBooks />}></Route>
        <Route
          exact
          path="/Member/viewBookings"
          element={<ViewBookings />}
        ></Route>
        <Route
          exact
          path="/Member/viewHistory"
          element={<ViewHistory />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
