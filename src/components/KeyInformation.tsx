interface KeyInformationProps {
  title: string;
  text: string;
}
const KeyInformation = ({ title, text }: KeyInformationProps) => {
  return (
    <>
      <div className="key-information-block">
        <h1 className="catch-phrase">{title}</h1>
        <h2 className="subtext">{text}</h2>
      </div>
    </>
  );
};

export default KeyInformation;
