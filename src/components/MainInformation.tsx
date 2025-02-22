import KeyInformation from "./KeyInformation";
import KeyImages from "./KeyImages";
interface MainInformationProps {
  title: string;
  text: string;
}

const MainInformation = ({ title, text }: MainInformationProps) => {
  return (
    <>
      <div className="flex">
        <KeyInformation title={title} text={text} />
        <KeyImages />
      </div>
    </>
  );
};

export default MainInformation;
