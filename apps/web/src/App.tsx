import { Button } from "@dalye/ui";

export default function App() {
  return (
    <div style={{ 
      fontFamily: "Inter, system-ui, sans-serif", 
      padding: "40px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      marginTop: "100px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
    }}>
      <h1 style={{ color: "#111", fontSize: "2.5rem", marginBottom: "1rem" }}>Dalye Platform</h1>
      <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "2rem" }}>
        Your modern architecture is live. 
        GitHub + Cloudflare Pages + IDrive E2 are working in sync. 🚀
      </p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Button onClick={() => alert("Platform ready!")}>
          Get Started
        </Button>
      </div>
      
      <footer style={{ marginTop: "40px", color: "#999", fontSize: "0.9rem" }}>
        Architecture by Antigravity Expert
      </footer>
    </div>
  )
}
