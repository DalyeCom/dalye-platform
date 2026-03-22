import React from "react";

export const Button = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background-color 0.2s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0051bb")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
    >
      {children}
    </button>
  );
};
