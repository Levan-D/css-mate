import tsNode from "ts-node";
tsNode.register({ transpileOnly: true, project: './tsconfig.prerender.json' });

import("./prerender.js");
