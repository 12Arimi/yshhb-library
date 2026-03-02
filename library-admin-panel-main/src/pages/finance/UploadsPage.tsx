import { useState, useCallback } from "react";
import { Upload, FileSpreadsheet, FileText, X } from "lucide-react";

export default function UploadsPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files).filter(
      (f) => f.name.endsWith(".csv") || f.name.endsWith(".xlsx") || f.name.endsWith(".xls")
    );
    setFiles((prev) => [...prev, ...dropped]);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Bulk Uploads & Exports</h1>
        <p className="text-xs text-muted-foreground mt-1">Upload CSV/Excel files for bulk transactions and export reports</p>
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`bg-background border-2 border-dashed rounded-lg p-10 text-center transition-colors ${
          isDragging ? "border-info bg-info/5" : "border-border"
        }`}
      >
        <Upload size={32} strokeWidth={1} className="mx-auto text-muted-foreground mb-3" />
        <p className="text-sm font-medium text-foreground">Drag & drop CSV or Excel files here</p>
        <p className="text-xs text-muted-foreground mt-1 mb-4">Supports .csv, .xlsx, .xls</p>
        <label className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-md bg-foreground text-background cursor-pointer hover:bg-foreground/90 transition-colors">
          <Upload size={12} /> Browse Files
          <input type="file" accept=".csv,.xlsx,.xls" multiple className="hidden" onChange={handleFileSelect} />
        </label>
      </div>

      {/* Uploaded Files */}
      {files.length > 0 && (
        <div className="bg-background border border-border rounded-lg p-5 space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Staged Files</h2>
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between py-2 px-3 bg-muted rounded-md">
              <div className="flex items-center gap-2">
                <FileSpreadsheet size={14} className="text-success" />
                <span className="text-xs font-medium text-foreground">{f.name}</span>
                <span className="text-[10px] text-muted-foreground">({(f.size / 1024).toFixed(1)} KB)</span>
              </div>
              <button onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                <X size={14} />
              </button>
            </div>
          ))}
          <button className="text-xs font-medium px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors">
            Process Upload
          </button>
        </div>
      )}

      {/* Export Section */}
      <div className="bg-background border border-border rounded-lg p-5">
        <h2 className="text-sm font-semibold text-foreground mb-3">Export Reports</h2>
        <p className="text-xs text-muted-foreground mb-4">Generate audit-ready reports for download</p>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors">
            <FileText size={12} /> Export as PDF
          </button>
          <button className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors">
            <FileSpreadsheet size={12} /> Export as Excel
          </button>
        </div>
      </div>
    </div>
  );
}
