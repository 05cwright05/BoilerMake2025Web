import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import MainInformation from "./components/MainInformation";
import Footer from "./components/Footer";
import Demo from "./components/Demo";
import signature from "./assets/signature.jpg";
import siamese from "./assets/siamese_image.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <div style={{ height: "20px" }}></div>
              <MainInformation
                title="Verify Crucial Documents"
                text="The all-in-one system that protects your customers.
         SafeSurge continuously learns, flags, and notifies key security personel.
          We set it up for you and then its on autopilot"
                flip={false}
                stats={["24/7", "95.7%", "$100"]}
                stats_labels={[
                  "Availability",
                  "Fraud dection rate",
                  "Monthly starting price",
                ]}
                image={signature}
              />
              <div style={{ height: "10px" }}></div>
              <div className="line dark-line"></div>
              <div style={{ height: "10px" }}></div>
              <MainInformation
                title="Constantly Learning"
                text="SignaSure creates a profile for each of your patrons so the SignaSure API can make informed decisions to protect your most crucial assets"
                flip={true}
                stats={["2", "95.7%", "99%+*"]}
                stats_labels={[
                  "Independent layers",
                  "Initial accuracy rate",
                  "Accuracy rate overtime",
                ]}
                image={siamese}
              />
              <div style={{ height: "20px" }}></div>

              <Demo />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <Nav />
              <div style={{ height: "2000px" }}></div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
