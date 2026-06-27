import { useRef, useState } from "react";
import "./UploadCard.css";

function UploadCard() {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    console.log("Selected file:", file.name);
    // TODO: hand this off to whatever parses/uploads the file
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div
      className={`upload-card${isDragging ? " upload-card-dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />
      <p className="upload-card-title">Upload a file</p>
      <p className="upload-card-hint">Drag and drop, or click to browse</p>
    </div>
  );
}

export default UploadCard;