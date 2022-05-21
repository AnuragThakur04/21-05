import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import BookAppointment from "./BookAppointment";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import AboutDoctor from "./Pages/AboutDoctor";
import Location from "./Pages/Location";
import "./App.css";
import SignIn from "./Pages/Auth/SignIn";
import Register from "./Pages/Auth/Register";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

import { NativeBaseProvider, Box } from "native-base";
function App() {
  return (
    <NativeBaseProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route element={<SignIn />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Home />} path="/" />
            <Route element={<AboutUs />} path="/about" />
            <Route element={<Services />} path="/services" />
            <Route element={<AboutDoctor />} path="/about/doctor" />
            <Route element={<Location />} path="/location" />
            <Route element={<BookAppointment />} path="/book" />

            <Route element={<AdminDashboard />} path="/admin" />
          </Routes>
        </Router>
      </div>
    </NativeBaseProvider>
  );
}

export default App;
