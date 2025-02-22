import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="logo footer-logo vertical-center">SafeSure</h1>
      <div className="footer-icons">
        <div
          className="footer-icon"
          onClick={() =>
            (window.location.href = "mailto:safesureteam@gmail.com")
          }
        >
          <img src={mail} alt="Email" />
        </div>
        <div
          className="footer-icon"
          onClick={() => window.open("https://www.linkedin.com/in/", "_blank")}
        >
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
