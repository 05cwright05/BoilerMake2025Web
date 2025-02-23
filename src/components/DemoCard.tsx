import React, { useState, useRef } from "react";
import file_icon from "../assets/file.svg";

interface Props {
  text: string;
  setParentFile: (file: File | null) => void;
}

const DemoCard: React.FC<Props> = ({ text, setParentFile }) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
      setParentFile(selectedFile);
    }
  };

  // Handle drag & drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
      setParentFile(droppedFile);
    }
  };

  // Handle drag over
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Validate file type and size
  const validateFile = (file: File) => {
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (!validTypes.includes(file.type)) {
      alert("Invalid file type. Only JPEG, PNG, and PDF are allowed.");
      return false;
    }
    if (file.size > maxSize) {
      alert("File size exceeds 50MB.");
      return false;
    }
    return true;
  };

  // Remove file
  const removeFile = () => {
    setFile(null);
    setParentFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="demo-card">
      <div className="card-header">
        <p>{text}</p>
        <div
          className="upload-box"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="info">
            <img src={file_icon} alt="file icon" />
            <div>
              <h4>Choose a file or drag & drop it here</h4>
              <p>JPEG, PNG, and PDF formats, up to 50MB</p>
            </div>
            <button
              className="open-selector"
              onClick={() => fileInputRef.current?.click()}
            >
              Browse File
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept=".jpeg, .jpg, .png, .pdf"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
          </div>
        </div>

        {/* File preview box */}
        {file && (
          <div className="file-preview">
            <div className="file-info">
              <span className="file-name">{file.name}</span>
              <button className="remove-file" onClick={removeFile}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoCard;
