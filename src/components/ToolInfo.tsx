/** @format */

import React, { memo, useState } from "react";
import Tooltip from "./Tooltip";

export type TooltipProps = {
  children: React.ReactNode;
};

const ToolInfo = memo(({ children }: TooltipProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <Tooltip text={`Tool info`}>
        <div
          onClick={() => setVisibility((x) => !x)}
          className="h-6 w-6 cursor-help select-none rounded-full border-2 border-white text-center font-cursiveCustom"
        >
          i
        </div>
      </Tooltip>
      {visibility && (
        <div className="absolute z-10 select-none">
          <div className="menuContainer absolute  z-50  ">{children}</div>

          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-20 "
            onMouseDown={() => setVisibility(false)}
          ></div>
        </div>
      )}
    </div>
  );
});

ToolInfo.displayName = "Tooltip";

export default ToolInfo;
