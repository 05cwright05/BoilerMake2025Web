import { useEffect, useState } from "react";
import DemoCard from "./DemoCard";
import DemoResultsCard from "./DemoResultsCard";

const Demo = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [base64File1, setBase64File1] = useState<string | null>(null);
  const [base64File2, setBase64File2] = useState<string | null>(null);
  const [result, setResult] = useState("unknown");
  useEffect(() => {
    if (file1 && file2) {
      // Convert files to Base64 before logging
      Promise.all([
        convertFileToBase64(file1),
        convertFileToBase64(file2),
      ]).then(([base64_1, base64_2]) => {
        setBase64File1(base64_1);
        setBase64File2(base64_2);
      });
    }
  }, [file1, file2]);
  useEffect(() => {
    if (base64File1 && base64File2) {
      /* CALL API HERE */
    }
  }, [base64File1, base64File2]); // Runs when these state values update

  // Function to convert a file to Base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="demo">
      <h1 className="logo">Demo</h1>
      <div style={{ height: "40px" }}></div>
      <div className="demo-cards-container">
        <DemoCard text="Upload a valid signature" setParentFile={setFile1} />
        <DemoCard text="Upload an unknown signature" setParentFile={setFile2} />
        <DemoResultsCard status={result} />
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Demo;
