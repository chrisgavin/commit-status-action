"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommitStatus = void 0;
const core = require("@actions/core");
const github = require("@actions/github");
function getDefaultContext() {
    let context = `${github.context.workflow} / ${github.context.job}`;
    context += ` (${github.context.eventName})`;
    let matrix = JSON.parse(core.getInput("matrix", { required: true }));
    let matrixValues = Object.values(matrix);
    if (matrixValues) {
        // This is a bit dodgy as we rely on the matrix property order being preserved, but it seems to work.
        context += ` (${matrixValues.join(", ")})`;
    }
    return context;
}
function getDefaultTargetURL() {
    return `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/runs/${github.context.runId}`;
}
function createCommitStatus(state, description) {
    let token = core.getInput("github_token", { required: true });
    let sha = core.getInput("sha", { required: true });
    let octokit = github.getOctokit(token);
    octokit.repos.createCommitStatus({
        ...github.context.repo,
        sha: sha,
        state: state,
        context: getDefaultContext(),
        description: description,
        target_url: getDefaultTargetURL(),
    });
}
exports.createCommitStatus = createCommitStatus;
//# sourceMappingURL=status.js.map