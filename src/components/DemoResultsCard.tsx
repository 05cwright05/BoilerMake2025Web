import unknownImg from "../assets/unknown.svg";
import validImg from "../assets/valid.svg";
import invalidImg from "../assets/invalid.svg";

interface Props {
  status: string;
}
const getMessage = (status: Props["status"]) => {
  switch (status) {
    case "invalid":
      return "Significant fraud risk detected!";
    case "unknown":
      return "Input 2 images to get started!";
    case "valid":
      return "Signature is likely legitimate";
    default:
      return "";
  }
};

const statusImages: Record<Props["status"], string> = {
  unknown: unknownImg,
  valid: validImg,
  invalid: invalidImg,
};

const DemoResultsCard: React.FC<Props> = ({ status }) => {
  return (
    <div className="demo-card">
      <div className="card-header">
        <p>Prediction results</p>
        <div className="result-box">
          <img src={statusImages[status]} alt={status} />
        </div>
        <h4 className="description">{getMessage(status)}</h4>
      </div>
    </div>
  );
};

export default DemoResultsCard;
