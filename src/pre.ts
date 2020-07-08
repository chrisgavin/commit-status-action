import * as core from "@actions/core";

import * as status from "./status";

try {
	console.log(process.env);
	status.createCommitStatus("pending", "TODO");
}
catch (error) {
	core.setFailed(error.message);
}
