// import Plyr from "@robguy21/plyr-react";
window.__DEV__ = true;
import Plyr from "../../../../src";
import PlyrJS from "../../../../../plyr/src/js/plyr";
import "@robguy21/plyr-react/plyr.css";
import React from "react";
import { renderToString } from "react-dom/server";
import { PlayerControls } from "../controls";

/**
 * This code exports a React component called `VideoList` that renders a list of videos using the Plyr
 video player.
 * @returns Plyr instance
 */

async function asyncSetTimeout<Type>(
  fn: () => Type,
  wait: number
): Promise<Type> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, wait);
  });
}

async function timer(test: () => boolean, wait: number, attempts = 1) {
  return new Promise(async (resolve, reject) => {
    let result = false;
    for (let i = 1; i <= attempts; i++) {
      result = await asyncSetTimeout(test, wait);
      if (result) {
        break;
      }
    }

    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

const defaultOptions = {
  i18n: {
    restart: "Restart",
    rewind: "Rewind {seektime}s",
    play: "Play",
    pause: "Pause",
    fastForward: "Forward {seektime}s",
    seek: "Seek",
    seekLabel: "{currentTime} of {duration}",
    played: "Played",
    buffered: "Buffered",
    currentTime: "Current time",
    duration: "Duration",
    volume: "Volume",
    mute: "Mute",
    unmute: "Unmute",
    enableCaptions: "Enable captions",
    disableCaptions: "Disable captions",
    download: "Download",
    enterFullscreen: "Enter fullscreen",
    exitFullscreen: "Exit fullscreen",
    frameTitle: "Player for {title}",
    captions: "Captions",
    settings: "Settings",
    menuBack: "Go back to previous menu",
    speed: "Speed",
    normal: "Normal",
    quality: "Quality",
    loop: "Loop",
  },
  controls: {
    changeSource: false,
    selectSource: false,
    editCuepoints: false,
    playoutTrimming: false,
    timers: false,
  },
};

export default function VideoList() {
  const ref = React.useRef();
  React.useEffect(() => {
    // check if plyr object is ready
    async function ready() {
      const maxWaitBeforeCrash = 10;

      return new Promise(async (res, rej) => {
        const result = await timer(
          () => ref.current?.plyr.hasOwnProperty("updateMarkers"),
          60
        );
        if (result) {
          res(result);
        } else {
          rej(result);
        }
      });
    }

    ready()
      .then(() => {
        // enforce options
        ref.current.plyr.muted = true;
        ref.current.plyr.autoplay = true;

        // update source
        console.log("REACT SETTING A SOURCE");

        ref.current.plyr.source = {
          type: "video",
          title: "",
          sources: [
            {
              src: "https://d3m47oa1irluhj.cloudfront.net/archive/Air%20Force%20One%20is%20Down/series/season1/episode1/Signature_Air_Force_One_Is_Down_Part_1_FTR_25_LtRt_OnAir.mp4",
              type: "video/mp4",
              size: 720,
            },
          ],
        };

        const markers = [
          {
            time: 30,
            label: "1",
            type: "cuepoint",
          },
          {
            time: 90,
            label: "2",
            type: "cuepoint",
          },
          {
            time: 120,
            label: "3",
            type: "cuepoint",
          },
          {
            time: 60,
            label: "Trimmed",
            type: "trim-point",
          },
        ];

        ref.current.plyr.updateMarkers(markers);
      })
      .catch(console.error);
  }, []);

  const optionsMemo = React.useMemo(() => {
    return {
      ...defaultOptions,
      controls: renderToString(<PlayerControls {...defaultOptions.controls} />),
    };
  }, []);

  return (
    <ul className="video-list">
      <li className="video-item">
        <Plyr ref={ref} source={null} options={optionsMemo} />
      </li>
    </ul>
  );
}
