import { Button } from "@dalye/ui";
import styles from "./App.module.css";
import { VideoFeed } from "./components/VideoFeed";

export default function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>Dalye Platform</h1>
        <p className={styles.description}>
          Your modern architecture is live. 
          GitHub + Cloudflare Pages + IDrive E2 are working in sync. 🚀
        </p>
      </header>
      
      <main>
        <VideoFeed />
      </main>
      
      <div className={styles.actions}>
        <Button onClick={() => alert("Platform ready!")}>
          Get Started
        </Button>
        <Button variant="secondary" onClick={() => alert("More info coming soon!")}>
          Learn More
        </Button>
      </div>
      
      <footer className={styles.footer}>
        Architecture by Antigravity Expert
      </footer>
    </div>
  )
}
