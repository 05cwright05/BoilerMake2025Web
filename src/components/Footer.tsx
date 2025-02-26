import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="logo footer-logo vertical-center">SignaSure</h1>
      <div className="footer-icons">
        <div
          className="footer-icon"
          onClick={() =>
            (window.location.href = "mailto:signasureteam@gmail.com")
          }
        >
          <img src={mail} alt="Email" />
        </div>
        <div
          className="footer-icon"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/caden-wright05")
          }
        >
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
