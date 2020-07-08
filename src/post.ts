import * as core from "@actions/core";

import * as status from "./status";

try {
	let steps = JSON.parse(core.getInput("steps", { required: true }));
	let currentStatus: status.StatusState = "success"
	for (let step of Object.values(steps)) {
		if ((step as any).outcome !== "success") {
			currentStatus = "failure";
		}
	}
	status.createCommitStatus(currentStatus, "TODO");
}
catch (error) {
	core.setFailed(error.message);
}
