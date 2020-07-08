"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const status = require("./status");
try {
    console.log(process.env);
    status.createCommitStatus("pending", "TODO");
}
catch (error) {
    core.setFailed(error.message);
}
//# sourceMappingURL=pre.js.map