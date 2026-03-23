import React from "react";
import { Card } from "@dalye/ui";
import styles from "./VideoFeed.module.css";

const MOCK_VIDEOS = [
  { id: 1, title: "Building a Modern Platform", author: "Antigravity Expert", views: "1.2k" },
  { id: 2, title: "Cloudflare Pages Setup", author: "Web Master", views: "850" },
  { id: 3, title: "Monorepo Best Practices", author: "Dev Architect", views: "3.4k" },
  { id: 4, title: "React & TypeScript", author: "Frontend Lead", views: "2.1k" },
  { id: 5, title: "IDrive E2 Integration", author: "Infra Guy", views: "600" },
  { id: 6, title: "Vite + PNPM Guide", author: "Tooling Expert", views: "1.5k" },
];

export const VideoFeed: React.FC = () => {
  return (
    <div className={styles.grid}>
      {MOCK_VIDEOS.map((video) => (
        <Card key={video.id} className={styles.videoCard}>
          <div className={styles.thumbnailPlaceholder}>
            VIDEO THUMBNAIL
          </div>
          <div className={styles.meta}>
            <h4 className={styles.title}>{video.title}</h4>
            <span className={styles.author}>{video.author} • {video.views} views</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
