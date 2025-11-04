import { useState, type CSSProperties } from "react";

interface ToggleSectionProps {
  title: string;
  children: React.ReactNode;
}

function ToggleSection({ title, children }: ToggleSectionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const h4Style = {
    backgroundColor: "black",
    color: "orange",
    cursor: "pointer",
  };

  const toggleSectionStyle: CSSProperties = {
    margin: '10px auto',
    padding: '10px',
    height: '70vh',
    backgroundColor: '#f4f4f4',
    overflowY: "auto"
  };

  return (
    <div>
      <h4 style={h4Style} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼" : "▶"} {title}
      </h4>
      {isOpen && <div style={toggleSectionStyle}>{children}</div>}
    </div>
  );
}

export default ToggleSection;