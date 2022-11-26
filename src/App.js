import {useState} from "react";

function App() {
    const [tank, setTank] = useState(0);
    const [mpg, setMpg] = useState(0);
    const [distance, setDistance] = useState(0);
    const [result, setResult] = useState('');


    function onCalculate() {
        const carDistance = tank * mpg;
        if(carDistance >= distance) setResult('We will reach the gas station.');
        else setResult('We will not get to the gas station')
    }

    return (
        <div className="App">

            <div>
                <label htmlFor="tank">Tank Size</label>
                <input value={tank} onChange={e => setTank(e.target.value)} name="tank" type="number"/>
            </div>

            <div>
                <label htmlFor="mpg">MPG</label>
                <input value={mpg} onChange={e => setMpg(e.target.value)} name="mpg" type="number"/>
            </div>

            <div>
                <label htmlFor="distance">Distance</label>
                <input value={distance} onChange={e => setDistance(e.target.value)} name="distance" type="number"/>
            </div>

            <button onClick={onCalculate}>Calculate</button>

            <hr/>

            {result}

        </div>
    );
}

export default App;
