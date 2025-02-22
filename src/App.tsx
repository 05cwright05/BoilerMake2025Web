import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import MainInformation from "./components/MainInformation";
import Footer from "./components/Footer";
import Demo from "./components/Demo";

const App = () => {
  return (
    <>
      <Nav />
      <div style={{ height: "40px" }}></div>
      <MainInformation
        title="Verify Crucial Documents - Confidently"
        text="The all-in-one system that protects your customers.
         SafeSurge continuously learns, flags, and notifies key security personel.
          We set it up for you and then its on autopilot"
      />
      <Demo />
      <Footer />
    </>
  );
};

export default App;
