import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // Don't forget to import your Navbar!
import Footer from "./components/Footer";
import FriendDetails from "./pages/FriendDetails";
import { ToastContainer } from "react-toastify";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/timeline"
            element={<Timeline />}
          />
          <Route
            path="/stats"
            element={
              <div className="pt-32 text-center text-2xl">
                Stats Page coming soon!
              </div>
            }
          />

          <Route path="/friend/:id" element={<FriendDetails />} />

          <Route
            path="*"
            element={
              <div className="pt-32 text-center">404 - Page Not Found</div>
            }
          />
        </Routes>
      </main>
      <Footer />

      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
