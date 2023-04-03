import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Home from "./Home/Final";
import Login from "./Login";
import SignUp from "./Signup";
import Admin from "./Admin/Admin";
import Giftcards from "./Giftcard";
import Alogin from "./Admin/Alogin";
import Option, { Dashboard, Productlist } from "./Admin/product";
import Community from "./Community";
import Rewards from "./Rewards";
import Productpage from "./Productpage";
import Email from "./Email";
<<<<<<< HEAD
import Utilities, { Cform } from "./Admin/utilities";
=======
<<<<<<< HEAD
import Utilities, { Cform } from "./Admin/utilities";
=======
import Ucatagory from "./Admin/category";
import Usubcatagory, { Cform } from "./Admin/subcatagory";
import Uoption, { Nav } from "./Admin/Uoption";
>>>>>>> 0440c72 (Final commit)
>>>>>>> 3911f62 (Final Commit)
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
                <Subscribe />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Login"
            element={
              <div>
                <Header />
                <Login />
                <Subscribe />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Signup"
            element={
              <div>
                <Header />
                <SignUp />
                <Subscribe />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Giftcard"
            element={
              <div>
                <Header />
                <Giftcards />
                <Subscribe />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Rewards"
            element={
              <div>
                <Header />
                <Rewards />
                <Subscribe />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Admin"
            element={
              <div>
                <Dashboard />
                <Admin />
              </div>
            }
          />
          <Route path="/Email" element={<Email />} />
          <Route path="/Alogin" element={<Alogin />} />
          <Route path="/Option" element={<Option />} />
          <Route
            path="/productlist"
            element={
              <div>
                <Dashboard />
                <Productlist />
              </div>
            }
          />
          <Route
            path="/community"
            element={
              <div>
                <Header />
                <Community />
                <Subscribe />
                <Footer />
              </div>
            }
          />
          <Route
            path="/productpage"
            element={
              <div>
                <Header />
                <Productpage />
                <Subscribe />
                <Footer />
              </div>
            }
          />
<<<<<<< HEAD
          <Route path="/utilities" element={<Utilities />} />
=======
<<<<<<< HEAD
          <Route path="/utilities" element={<Utilities />} />
=======
          <Route
            path="/utilities"
            element={
              <div>
                <Nav />
                <Ucatagory />
              </div>
            }
          />
          <Route
            path="/subcategory"
            element={
              <div>
                <Nav />
                <Usubcatagory />
              </div>
            }
          />
          <Route
            path="/uoption"
            element={
              <div>
                <Dashboard />
                <Uoption />
              </div>
            }
          />
>>>>>>> 0440c72 (Final commit)
>>>>>>> 3911f62 (Final Commit)
          <Route
            path="/cform"
            element={
              <div>
<<<<<<< HEAD
                <Dashboard />
=======
<<<<<<< HEAD
                <Dashboard />
=======
                <Nav />
>>>>>>> 0440c72 (Final commit)
>>>>>>> 3911f62 (Final Commit)
                <Cform />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
