const command = "bash pecan/scripts/network stats";
const refreshFrequency = 5000; // ms

const render = ({ output }) => <div class='screen'><div class='pecannetwork-stats'>{`${output}`}</div></div>;

export { command, refreshFrequency, render };
