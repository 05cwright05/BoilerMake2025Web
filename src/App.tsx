import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import MainInformation from "./components/MainInformation";
import Footer from "./components/Footer";
import Demo from "./components/Demo";
import signature from "./assets/signature.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ishaan from "./assets/Ishaan.jpg";
import caden from "./assets/Caden.jpg";
import gavin from "./assets/Gavin.jpg";
import API from "./assets/API.jpeg";
import data from "./assets/data.jpg";
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
                title="Verifies Crucial Documents"
                text="The all-in-one system that protects your customers.
         Signasure continuously learns, flags, and notifies key security personel.
          We set it up for you and then its on autopilot"
                flip={false}
                stats={["24/7", "92%", "$$"]}
                stats_labels={["Availability", "Fraud dection rate", "Saved"]}
                image={signature}
              />
              <div style={{ height: "10px" }}></div>
              <div className="line dark-line"></div>
              <div style={{ height: "10px" }}></div>
              <MainInformation
                title="Improves over time"
                text="Our model learns from your organizations data so it can make more accurate predicitons for you buisness"
                flip={true}
                stats={["#1", "86%", "99%+"]}
                stats_labels={[
                  "For your buisness",
                  "Initial detection rate",
                  "Accuracy over time",
                ]}
                image={data}
              />
              <div style={{ height: "10px" }}></div>
              <div className="line dark-line"></div>
              <div style={{ height: "10px" }}></div>{" "}
              <MainInformation
                title="Simple to use API"
                text="With simple documentation, implementation, and 24/7 access to our committed support team, SignaSure's API is always at the ready for your buisness"
                flip={false}
                stats={["1", "100%", "150ms"]}
                stats_labels={[
                  "Streamlined API",
                  "Uptime",
                  "Average wait time",
                ]}
                image={API}
              />
              <Demo />
              <Footer />
            </>
          }
        />
        <Route
          path="/story"
          element={
            <>
              <Nav />
              <div style={{ height: "20px" }}></div>
              <MainInformation
                title="Ishaan Buddharaju"
                text="Ishaan iterated through numerous models before landing on SignaSure's tensorflow powered CNN"
                flip={false}
                stats={["5+", "???", "∞"]}
                stats_labels={[
                  "Energy drinks",
                  "Model redesigns",
                  "Determination",
                ]}
                image={ishaan}
              />
              <div className="line dark-line"></div>
              <MainInformation
                title="Gavin Jensen"
                text="Gavin designed and developed our Flask based API that gives SignaSure's customers easy access to our latest verification models."
                flip={true}
                stats={["#1", "∞", "0"]}
                stats_labels={["Debugger", "Motivation", "Naps taken"]}
                image={gavin}
              />
              <div className="line dark-line"></div>
              <MainInformation
                title="Caden Wright"
                text="Caden developed and deployed Signaure's website with React and CSS on AWS. Caden also developed Signaure's logos and images in Figma"
                flip={false}
                stats={["∞", "???", "0"]}
                stats_labels={[
                  "Lines written",
                  "Doc pages read",
                  "Hours slept",
                ]}
                image={caden}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
