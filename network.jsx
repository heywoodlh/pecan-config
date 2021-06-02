const command = "bash pecan/scripts/network name";
const refreshFrequency = 5000; // ms

const render = ({ output }) => <div class='screen'><div class='pecannetwork-name'>{`${output}`}</div></div>;

export { command, refreshFrequency, render };
