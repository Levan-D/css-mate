import tsNode from "ts-node";
tsNode.register({ transpileOnly: true });

import("./prerender.js");
