import Plyr from "@robguy21/plyr-react";
import "@robguy21/plyr-react/plyr.css";
import contents from "./contents.json";

/**
 * This code exports a React component called `VideoList` that renders a list of videos using the Plyr
video player.
 * @returns Plyr instance
 */
export default function VideoList() {
  return (
    <ul className="video-list">
      {contents.videos.map((video) => (
        <li key={video.id} className="video-item">
          <Plyr
            source={{
              type: "video",
              // @ts-ignore
              sources: [{ src: video.id, provider: video.source }],
            }}
          />
        </li>
      ))}
    </ul>
  );
}
