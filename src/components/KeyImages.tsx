interface props {
  image: string;
}
const KeyImages = ({ image }: props) => {
  return (
    <>
      <div className="centered-image">
        <img className="image" src={image}></img>
      </div>
    </>
  );
};

export default KeyImages;
