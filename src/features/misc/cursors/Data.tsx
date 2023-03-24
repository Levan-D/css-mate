/** @format */
import React, { ReactNode } from "react"

export type CursorType = {
  category: string
  contents: {
    name: string
    description?: string
    cssRule?: ReactNode
    vanilla: string
    tailwind: string
  }[]
}

export const cursorData: CursorType[] = [
  {
    category: "Custom cursors",
    contents: [
      {
        name: "Carrot",
        description: "Custom carrot cursor ",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              url(https://i.imgur.com/wB5relR.png) 0 10 ,auto
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: `cursor: url(https://i.imgur.com/wB5relR.png) 0 10 ,auto;`,
        tailwind: ` cursor-[url(https://i.imgur.com/wB5relR.png)_0_0,auto]`,
      },

      {
        name: "Rocket",
        description: "Custom rocket cursor ",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              url(https://i.imgur.com/bHSn9dh.png) 0 10 ,auto
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
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
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              auto
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: auto;",
        tailwind: "cursor-auto",
      },

      {
        name: "Default",
        description: "Default cursor",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              default
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: default;",
        tailwind: "cursor-default",
      },
      {
        name: "Initial",
        description: "Sets the cursor to default",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              initial
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: initial;",
        tailwind: "cursor-initial",
      },
      {
        name: "None",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              none
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
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
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              pointer
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: pointer;",
        tailwind: "cursor-pointer",
      },
      {
        name: "Vertical Text",
        description: "Indicates vertical text",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              vertical-text
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: vertical-text;",
        tailwind: "cursor-vertical-text",
      },
      {
        name: "Horizontal Text",
        description: "Indicates Horizontal text",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              text
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: text;",
        tailwind: "cursor-text",
      },

      {
        name: "Cell",
        description: "Indicates Cell or Cells",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              cell
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: cell;",
        tailwind: "cursor-cell",
      },
      {
        name: "Crosshair",
        description: "Often used for bitmap",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              crosshair
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
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
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              copy
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: copy;",
        tailwind: "cursor-copy",
      },
      {
        name: "Grab",
        description: "Show object can be grabbed",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              grab
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: grab;",
        tailwind: "cursor-grab",
      },
      {
        name: "Grabbing",
        description: "Object is being grabbed",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              grabbing
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: grabbing;",
        tailwind: "cursor-grabbing",
      },
      {
        name: "Move",
        description: "Show object can be moved",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              move
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: move;",
        tailwind: "cursor-move",
      },
      {
        name: "Alias",
        description: "Can create alias/shortcut",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              alias
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: alias;",
        tailwind: "cursor-alias",
      },
      {
        name: "Not Allowed",
        description: "Action not allowed",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              not-allowed
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: not-allowed;",
        tailwind: "cursor-not-allowed",
      },
      {
        name: "No Drop",
        description: "Can't drop here",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              no-drop
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
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
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              progress
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: progress;",
        tailwind: "cursor-progress",
      },
      {
        name: "Wait",
        description: "Loading and can't interact",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              wait
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
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
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              zoom-in
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: zoom-in;",
        tailwind: "cursor-zoom-in",
      },

      {
        name: "Zoom Out",
        description: "Can zoom out",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              zoom-out
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
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
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              col-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: col-resize;",
        tailwind: "cursor-col-resize",
      },

      {
        name: "Row Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              row-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: row-resize;",
        tailwind: "cursor-row-resize",
      },

      {
        name: "N Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              n-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: n-resize;",
        tailwind: "cursor-n-resize",
      },

      {
        name: "E Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              e-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: e-resize;",
        tailwind: "cursor-e-resize",
      },

      {
        name: "S Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              s-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: s-resize;",
        tailwind: "cursor-s-resize",
      },

      {
        name: "W Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              w-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: w-resize;",
        tailwind: "cursor-w-resize",
      },

      {
        name: "NE Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              ne-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: ne-resize;",
        tailwind: "cursor-ne-resize",
      },

      {
        name: "NW Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              nw-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: nw-resize;",
        tailwind: "cursor-nw-resize",
      },

      {
        name: "SE Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              se-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: se-resize;",
        tailwind: "cursor-se-resize",
      },

      {
        name: "SW Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              sw-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: sw-resize;",
        tailwind: "cursor-sw-resize",
      },

      {
        name: "EW Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              ew-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: ew-resize;",
        tailwind: "cursor-ew-resize",
      },

      {
        name: "NS Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              ns-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: ns-resize;",
        tailwind: "cursor-ns-resize",
      },

      {
        name: "NESW Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              nesw-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: nesw-resize;",
        tailwind: "cursor-nesw-resize",
      },

      {
        name: "NWSE Resize",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              nwse-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
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
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              help-resize
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: help;",
        tailwind: "cursor-help",
      },

      {
        name: "All Scroll",
        description: "Can scroll in any direction",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              all-scroll
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: all-scroll;",
        tailwind: "cursor-all-scroll",
      },
      {
        name: "Context Menu",
        description: "Context menu is available",
        cssRule: (
          <>
            <span className="text-blue-600">
              cursor<span className="px-[4px] text-slate-900">:</span>
            </span>
            <span className="text-orange-600">
              context-menu
              <span className="pl-[4px] text-slate-900 ">;</span>
            </span>
          </>
        ),
        vanilla: "cursor: context-menu;",
        tailwind: "cursor-context-menu",
      },
    ],
  },
]
