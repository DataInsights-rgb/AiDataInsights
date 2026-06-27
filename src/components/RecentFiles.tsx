import "./RecentFiles.css";

interface RecentFile {
  name: string;
  uploadedAt: string;
}

const placeholderFiles: RecentFile[] = [
  { name: "report_q3.csv", uploadedAt: "2 min ago" },
  { name: "notes.pdf", uploadedAt: "yesterday" },
];

function RecentFiles() {
  return (
    <div className="recent-files">
      <h3 className="recent-files-title">Recent files</h3>
      <ul className="recent-files-list">
        {placeholderFiles.map((file) => (
          <li key={file.name} className="recent-files-row">
            <span className="recent-files-name">{file.name}</span>
            <span className="recent-files-time">{file.uploadedAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentFiles;