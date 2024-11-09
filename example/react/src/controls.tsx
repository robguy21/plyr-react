import React from "react";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ContentCutRoundedIcon from "@mui/icons-material/ContentCutRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

import { renderToString } from "react-dom/server";
function SelectSourceControl() {
  return (
    <React.Fragment>
      <button
        type="button"
        className="plyr__control plyr__control--edit-control"
        data-plyr="select-source">
        <span className="plyr__icon">
          <MoreVertRoundedIcon />
        </span>
      </button>
      <ul
        className="plyr__select-source-dropdown"
        data-plyr="select-source-dropdown"
        id="select-source-dropdown">
        <li
          className="plyr__select-source-dropdown__item"
          data-plyr="select-source-dropdown__normalised">
          Normalised
        </li>
        <li
          className="plyr__select-source-dropdown__item"
          data-plyr="select-source-dropdown__source">
          Source
        </li>
        <li
          className="plyr__select-source-dropdown__item"
          data-plyr="select-source-dropdown__dash">
          DASH
        </li>
        <li
          className="plyr__select-source-dropdown__item"
          data-plyr="select-source-dropdown__hls">
          HLS
        </li>
      </ul>
    </React.Fragment>
  );
}

function ChangeSourceControl() {
  return (
    <button
      type="button"
      className="plyr__control plyr__control--edit-control"
      data-plyr="change-source">
      <span className="plyr__icon">
        <RotateLeftRoundedIcon />
      </span>
      <span className="label--pressed plyr__tooltip" role="tooltip">
        Change source
      </span>
      <span className="label--not-pressed plyr__tooltip" role="tooltip">
        Change source
      </span>
    </button>
  );
}

function CuepointControls() {
  return (
    <React.Fragment>
      <button
        type="button"
        className="plyr__control plyr__control--edit-control"
        data-plyr-seektime="{seektime}"
        data-plyr="add-cuepoint">
        <span className="plyr__icon">
          <AddRoundedIcon />
        </span>
        <span
          className="label--pressed plyr__tooltip"
          role="tooltip"
          data-seektime="{seektime}">
          Add Cuepoint
        </span>
        <span
          className="label--not-pressed plyr__tooltip"
          role="tooltip"
          data-seektime="{seektime}">
          Add Cuepoint
        </span>
      </button>
      <button
        type="button"
        className="plyr__control plyr__control--edit-control"
        data-plyr-seektime="{seektime}"
        data-plyr="remove-cuepoint">
        <span className="plyr__icon">
          <DeleteRoundedIcon />
        </span>
        <span
          className="label--pressed plyr__tooltip"
          role="tooltip"
          data-seektime="{seektime}">
          Remove Cuepoint
        </span>
        <span
          className="label--not-pressed plyr__tooltip"
          role="tooltip"
          data-seektime="{seektime}">
          Remove Cuepoint
        </span>
      </button>
    </React.Fragment>
  );
}

function TrimPlayoutControl() {
  return (
    <button
      type="button"
      className="plyr__control plyr__control--edit-control"
      data-plyr-seektime="{seektime}"
      data-plyr="trim-video">
      <span className="plyr__icon">
        <ContentCutRoundedIcon />
      </span>
      <span className="plyr__tooltip" role="tooltip" data-seektime="{seektime}">
        Trim Playout
      </span>
      <span className="label--pressed plyr__tooltip" role="tooltip">
        Trim Playout
      </span>
    </button>
  );
}

function FullScreenControl() {
  return (
    <button type="button" className="plyr__control" data-plyr="fullscreen">
      <svg className="icon--pressed" role="presentation">
        <use xlinkHref="#plyr-exit-fullscreen"></use>
      </svg>
      <svg className="icon--not-pressed" role="presentation">
        <use xlinkHref="#plyr-enter-fullscreen"></use>
      </svg>
    </button>
  );
}

function Timers() {
  return (
    <React.Fragment>
      <div className="plyr__time plyr__time--current" aria-label="Current time">
        00:00
      </div>
      <div className="plyr__time plyr__time--duration" aria-label="Duration">
        00:00
      </div>
    </React.Fragment>
  );
}

export function PlayerControls({
  changeSource = false,
  selectSource = false,
  editCuepoints = false,
  playoutTrimming = false,
  timers = false,
}) {
  return (
    <div className="plyr__controls">
      <div className="plyr__controls__row">
        <div className="plyr__progress">
          <input
            data-plyr="seek"
            type="range"
            min="0"
            max="100"
            step="0.01"
            defaultValue="0"
            aria-label="Seek"
          />
          <progress
            className="plyr__progress__buffer"
            min="0"
            max="100"
            defaultValue="0">
            % buffered
          </progress>
          <span role="tooltip" className="plyr__tooltip">
            00:00
          </span>
        </div>
      </div>
      <div className="plyr__controls__row">
        <div className="plyr__controls__column">
          <button type="button" className="plyr__control" data-plyr="rewind">
            <svg role="presentation">
              <use xlinkHref="#plyr-rewind"></use>
            </svg>
            <span className="plyr__tooltip" role="tooltip">
              Rewind {`{seektime}`} secs
            </span>
          </button>
          <button
            type="button"
            className="plyr__control"
            aria-label="Play, {title}"
            data-plyr="play">
            <svg className="icon--pressed" role="presentation">
              <use xlinkHref="#plyr-pause"></use>
            </svg>
            <svg className="icon--not-pressed" role="presentation">
              <use xlinkHref="#plyr-play"></use>
            </svg>
            <span className="label--pressed plyr__tooltip" role="tooltip">
              Pause
            </span>
            <span className="label--not-pressed plyr__tooltip" role="tooltip">
              Play
            </span>
          </button>
          <button
            type="button"
            className="plyr__control"
            data-plyr="fast-forward">
            <svg role="presentation">
              <use xlinkHref="#plyr-fast-forward"></use>
            </svg>
            <span className="plyr__tooltip" role="tooltip">
              Forward {`{seektime}`} secs
            </span>
          </button>
        </div>
        <div className="plyr__controls__column plyr__controls__column--right">
          <button
            type="button"
            className="plyr__control"
            aria-label="Mute"
            data-plyr="mute">
            <svg className="icon--pressed" role="presentation">
              <use xlinkHref="#plyr-muted"></use>
            </svg>
            <svg className="icon--not-pressed" role="presentation">
              <use xlinkHref="#plyr-volume"></use>
            </svg>
            <span className="label--pressed plyr__tooltip" role="tooltip">
              Unmute
            </span>
            <span className="label--not-pressed plyr__tooltip" role="tooltip">
              Mute
            </span>
          </button>
          <div className="plyr__volume">
            <input
              data-plyr="volume"
              type="range"
              min="0"
              max="1"
              step="0.05"
              defaultValue="1"
              autoComplete="off"
              aria-label="Volume"
            />
          </div>
          {!changeSource && !editCuepoints && !playoutTrimming && !timers ? (
            <FullScreenControl />
          ) : null}
          {selectSource ? <SelectSourceControl /> : null}
        </div>
      </div>
      {changeSource || editCuepoints || playoutTrimming || timers ? (
        <div className="plyr__controls__row">
          <div className="plyr__controls__column">
            {timers ? <Timers /> : null}
          </div>
          <div className="plyr__controls__column plyr__controls__column--right">
            {changeSource ? <ChangeSourceControl /> : null}
            {editCuepoints ? <CuepointControls /> : null}
            {playoutTrimming ? <TrimPlayoutControl /> : null}
            <FullScreenControl />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function getPlayerControls(
  showCuepointControls = true,
  withEditorControls = false,
  canChangeVideo = false
) {
  const editorControls = `
  <div class="plyr__controls__row">
    <div class="plyr__controls__column">
      <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
      <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    </div>
    <div class="plyr__controls__column plyr__controls__column--right">

    ${
      canChangeVideo
        ? `
        <button type="button" class="plyr__control plyr__control--edit-control" data-plyr="change-source">
            <span class="plyr__icon">${renderToString(
              <RotateLeftRoundedIcon />
            )}</i></span>
            <span class="label--pressed plyr__tooltip" role="tooltip">Change source</span>
            <span class="label--not-pressed plyr__tooltip" role="tooltip">Change source</span>
        </button>
    `
        : ""
    }

    ${
      showCuepointControls
        ? `
        <button type="button" class="plyr__control plyr__control--edit-control" data-plyr-seektime="{seektime}" data-plyr="add-cuepoint">
            <span class="plyr__icon">${renderToString(
              <AddRoundedIcon />
            )}</span>
            <span class="label--pressed plyr__tooltip" role="tooltip" data-seektime="{seektime}">Add Cuepoint</span>
            <span class="label--not-pressed plyr__tooltip" role="tooltip" data-seektime="{seektime}">Add Cuepoint</span>
        </button>
        <button type="button" class="plyr__control plyr__control--edit-control" data-plyr-seektime="{seektime}" data-plyr="remove-cuepoint">
            <span class="plyr__icon">${renderToString(
              <DeleteRoundedIcon />
            )}</span>
            <span class="label--pressed plyr__tooltip" role="tooltip" data-seektime="{seektime}">Remove Cuepoint</span>
            <span class="label--not-pressed plyr__tooltip" role="tooltip" data-seektime="{seektime}">Remove Cuepoint</span>
        </button>
      `
        : ""
    }
        <button type="button" class="plyr__control plyr__control--edit-control" data-plyr-seektime="{seektime}" data-plyr="trim-video">
            <span class="plyr__icon">${renderToString(
              <ContentCutRoundedIcon />
            )}</span>
            <span class="plyr__tooltip" role="tooltip"data-seektime="{seektime}">Trim Playout</span>
            <span class="label--pressed plyr__tooltip" role="tooltip" >Trim Playout</span>
        </button>
        <button type="button" class="plyr__control" data-plyr="fullscreen">
            <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
            <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
        </button>
    </div>
  </div>
  `;

  return `
<div class="plyr__controls">
  <div class="plyr__controls__row">
      <div class="plyr__progress">
          <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
          <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
          <span role="tooltip" class="plyr__tooltip">00:00</span>
      </div>
  </div>
  <div class="plyr__controls__row">
    <div class="plyr__controls__column">
      <button type="button" class="plyr__control" data-plyr="rewind">
          <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
          <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
      </button>
      <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
          <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
          <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
          <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
          <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
      </button>
      <button type="button" class="plyr__control" data-plyr="fast-forward">
          <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
          <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
      </button>
    </div>
    <div class="plyr__controls__column plyr__controls__column--right">
      <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
          <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
          <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
          <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
          <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
      </button>
      <div class="plyr__volume">
          <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
      </div>
      ${
        !withEditorControls
          ? `
        <button type="button" class="plyr__control" data-plyr="fullscreen">
            <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
            <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
        </button>
      `
          : ""
      }
    </div>
  </div>
  ${withEditorControls ? editorControls : ""}
</div>
`;
}
