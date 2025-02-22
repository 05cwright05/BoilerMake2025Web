import KeyInformation from "./KeyInformation";
import KeyImages from "./KeyImages";
interface MainInformationProps {
  title: string;
  text: string;
  flip: boolean; // if set to true than render the image on left and text on right
  stats: string[];
  stats_labels: string[];
  image: string;
}
const MainInformation = ({
  title,
  text,
  flip,
  stats,
  stats_labels,
  image,
}: MainInformationProps) => {
  if (flip) {
    return (
      <>
        <div className="flex">
          <KeyImages image={image} />
          <KeyInformation
            title={title}
            text={text}
            stats={stats}
            stats_labels={stats_labels}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex">
          <KeyInformation
            title={title}
            text={text}
            stats={stats}
            stats_labels={stats_labels}
          />
          <KeyImages image={image} />
        </div>
      </>
    );
  }
};

export default MainInformation;
