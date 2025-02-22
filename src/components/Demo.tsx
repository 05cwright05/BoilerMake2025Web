import DemoCard from "./DemoCard";

const Demo = () => {
  return (
    <div className="demo">
      <h1 className="logo">Demo</h1>
      <div style={{ height: "40px" }}></div>
      <div className="demo-cards-container">
        <DemoCard />
        <DemoCard />
        <DemoCard />
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Demo;
