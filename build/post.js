"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const status = require("./status");
try {
    let steps = JSON.parse(core.getInput("steps", { required: true }));
    let currentStatus = "success";
    for (let step of Object.values(steps)) {
        if (step.outcome !== "success") {
            currentStatus = "failure";
        }
    }
    status.createCommitStatus(currentStatus, "TODO");
}
catch (error) {
    core.setFailed(error.message);
}
//# sourceMappingURL=post.js.map