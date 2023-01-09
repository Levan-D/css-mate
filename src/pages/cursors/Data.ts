/** @format */

import { CursorType } from "./CursorTypes"

export const cursorData: CursorType[] = [
  {
    category: "Custom cursors",
    contents: [
      {
        name: "Carrot",
        description: "Custom carrot cursor ",
        vanilla: `cursor: url(https://i.imgur.com/wB5relR.png) 0 10 ,auto;`,
        tailwind: ` cursor-[url(https://i.imgur.com/wB5relR.png)_0_0,auto]`,
      },

      {
        name: "Rocket",
        description: "Custom rocket cursor ",
        vanilla: `cursor: url(https://i.imgur.com/bHSn9dh.png) 0 10 ,auto;`,
        tailwind: ` cursor-[url(https://i.imgur.com/bHSn9dh.png)_0_10,auto]`,
      },
    ],
  },
  {
    category: "General",
    contents: [
      {
        name: "Auto",
        description: "The browser sets a cursor",
        vanilla: "cursor: auto;",
        tailwind: "cursor-auto",
      },

      {
        name: "Default",
        description: "Default cursor",
        vanilla: "cursor: default;",
        tailwind: "cursor-default",
      },
      {
        name: "Initial",
        description: "Sets the cursor to default",
        vanilla: "cursor: initial;",
        tailwind: "cursor-initial",
      },
      {
        name: "None",
        vanilla: "cursor: none;",
        description: "No cursor is rendered",
        tailwind: "cursor-none",
      },
    ],
  },
  {
    category: "Selectors",
    contents: [
      {
        name: "Pointer",
        description: "Sets cursor to pointer",
        vanilla: "cursor: pointer;",
        tailwind: "cursor-pointer",
      },
      {
        name: "Vertical Text",
        description: "Indicates vertical text",
        vanilla: "cursor: vertical-text;",
        tailwind: "cursor-vertical-text",
      },
      {
        name: "Horizontal Text",
        description: "Indicates Horizontal text",
        vanilla: "cursor: text;",
        tailwind: "cursor-text",
      },

      {
        name: "Cell",
        description: "Indicates Cell or Cells",
        vanilla: "cursor: cell;",
        tailwind: "cursor-cell",
      },
      {
        name: "Crosshair",
        description: "Often used for bitmap",
        vanilla: "cursor: crosshair;",
        tailwind: "cursor-crosshair",
      },
    ],
  },
  {
    category: "Drag & drop",
    contents: [
      {
        name: "Copy",
        description: "Show object can be copied",
        vanilla: "cursor: copy;",
        tailwind: "cursor-copy",
      },
      {
        name: "Grab",
        description: "Show object can be grabbed",
        vanilla: "cursor: grab;",
        tailwind: "cursor-grab",
      },
      {
        name: "Grabbing",
        description: "Object is being grabbed",
        vanilla: "cursor: grabbing;",
        tailwind: "cursor-grabbing",
      },
      {
        name: "Move",
        description: "Show object can be moved",
        vanilla: "cursor: move;",
        tailwind: "cursor-move",
      },
      {
        name: "Alias",
        description: "Can create alias/shortcut",
        vanilla: "cursor: alias;",
        tailwind: "cursor-alias",
      },
      {
        name: "Not Allowed",
        description: "Action not allowed",
        vanilla: "cursor: not-allowed;",
        tailwind: "cursor-not-allowed",
      },
      {
        name: "No Drop",
        description: "Can't drop here",
        vanilla: "cursor: no-drop;",
        tailwind: "cursor-no-drop",
      },
    ],
  },

  {
    category: "Loaders",
    contents: [
      {
        name: "Progress",
        description: "Loading but can interact",
        vanilla: "cursor: progress;",
        tailwind: "cursor-progress",
      },
      {
        name: "Wait",
        description: "Loading and can't interact",
        vanilla: "cursor: wait;",
        tailwind: "cursor-wait",
      },
    ],
  },

  {
    category: "Zoom",
    contents: [
      {
        name: "Zoom In",
        description: "Can zoom in",
        vanilla: "cursor: zoom-in;",
        tailwind: "cursor-zoom-in",
      },

      {
        name: "Zoom Out",
        description: "Can zoom out",
        vanilla: "cursor: zoom-out;",
        tailwind: "cursor-zoom-out",
      },
    ],
  },

  {
    category: "Resize",
    contents: [
      {
        name: "Col Resize",
        vanilla: "cursor: col-resize;",
        tailwind: "cursor-col-resize",
      },

      {
        name: "Row Resize",
        vanilla: "cursor: row-resize;",
        tailwind: "cursor-row-resize",
      },

      {
        name: "N Resize",
        vanilla: "cursor: n-resize;",
        tailwind: "cursor-n-resize",
      },

      {
        name: "E Resize",
        vanilla: "cursor: e-resize;",
        tailwind: "cursor-e-resize",
      },

      {
        name: "S Resize",
        vanilla: "cursor: s-resize;",
        tailwind: "cursor-s-resize",
      },

      {
        name: "W Resize",
        vanilla: "cursor: w-resize;",
        tailwind: "cursor-w-resize",
      },

      {
        name: "NE Resize",
        vanilla: "cursor: ne-resize;",
        tailwind: "cursor-ne-resize",
      },

      {
        name: "NW Resize",
        vanilla: "cursor: nw-resize;",
        tailwind: "cursor-nw-resize",
      },

      {
        name: "SE Resize",
        vanilla: "cursor: se-resize;",
        tailwind: "cursor-se-resize",
      },

      {
        name: "SW Resize",
        vanilla: "cursor: sw-resize;",
        tailwind: "cursor-sw-resize",
      },

      {
        name: "EW Resize",
        vanilla: "cursor: ew-resize;",
        tailwind: "cursor-ew-resize",
      },

      {
        name: "NS Resize",
        vanilla: "cursor: ns-resize;",
        tailwind: "cursor-ns-resize",
      },

      {
        name: "NESW Resize",
        vanilla: "cursor: nesw-resize;",
        tailwind: "cursor-nesw-resize",
      },

      {
        name: "NWSE Resize",
        vanilla: "cursor: nwse-resize;",
        tailwind: "cursor-nwse-resize",
      },
    ],
  },
  {
    category: "Misc",
    contents: [
      {
        name: "Help",
        description: "Help information available",
        vanilla: "cursor: help;",
        tailwind: "cursor-help",
      },

      {
        name: "All Scroll",
        description: "Can scroll in any direction",
        vanilla: "cursor: all-scroll;",
        tailwind: "cursor-all-scroll",
      },
      {
        name: "Context Menu",
        description: "Context menu is available",
        vanilla: "cursor: context-menu;",
        tailwind: "cursor-context-menu",
      },
    ],
  },
]
