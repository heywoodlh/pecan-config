const command = 'date +"%H:%M%p"';
const refreshFrequency = 60000; // ms

const render = ({ output }) => <div class='screen'><div class='pecanclock'>→ {`${output}`}</div></div>;

export { command, refreshFrequency, render };
