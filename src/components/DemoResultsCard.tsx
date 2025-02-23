import unknownImg from "../assets/placeholder.png";
import validImg from "../assets/placeholder.png";
import invalidImg from "../assets/placeholder.png";

interface Props {
  status: string;
}

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
      </div>
    </div>
  );
};

export default DemoResultsCard;
