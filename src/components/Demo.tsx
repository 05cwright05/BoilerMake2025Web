import { useEffect, useState } from "react";
import DemoCard from "./DemoCard";
import DemoResultsCard from "./DemoResultsCard";

const Demo = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [base64File1, setBase64File1] = useState<string | null>(null);
  const [base64File2, setBase64File2] = useState<string | null>(null);
  const [result, setResult] = useState("unknown");

  const sendImageData = async (imageBase641: string, imageBase642: string) => {
    console.log("starting api call");
    // Prepare the data to be sent to the API (JSON format)
    const requestData = {
      image_data: [imageBase641, imageBase642], // The base64 string without the prefix "data:image/png;base64,"
    };
    console.log("defined request data");
    console.log(imageBase641);
    console.log(imageBase641);

    try {
      console.log("in try");
      const response = await fetch(`http://127.0.0.1:5000/process_images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          PIN: "123456", // Add PIN in header for authentication
        },
        body: JSON.stringify(requestData), // Convert JS object to JSON string
      });
      console.log("awaiting response");
      // Check if the request was successful
      const flask_response = await response.json();

      console.log("hi");

      if (response.ok) {
        console.log("Image processed successfully:", flask_response);
        // Extract similarity_score
        const similarity = flask_response.classification;
        if (similarity === "Forgery") {
          setResult("invalid");
        } else {
          setResult("valid");
        }
      } else {
        console.log("Error:", flask_response.error);
      }
    } catch (error) {
      console.log("in catch");
      console.error("Error while uploading image:", error);
    }
  };

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
      sendImageData(base64File1, base64File2);
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
