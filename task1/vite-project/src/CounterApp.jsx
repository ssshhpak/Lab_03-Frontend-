import StepCounter from "./StepCounter";

function CounterApp() {
    return (
        <div>
            <h2>Counter Application</h2>

            {/* Each component has its own independent state */}

            <StepCounter initialValue={0} step={1} />
            <StepCounter initialValue={10} step={5} />
        </div>
    );
}
export default CounterApp;