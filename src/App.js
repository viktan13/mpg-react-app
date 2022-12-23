import {useEffect, useState} from "react";
import Animation from "./Animation";

function App() {
    const [tank, setTank] = useState(0);
    const [mpg, setMpg] = useState(0);
    const [distance, setDistance] = useState(0);
    const [result, setResult] = useState('');
    const [className, setClassName] = useState('static');

    useEffect(() => {
        onCalculate();
        setClassName('static')
    }, [tank, mpg, distance])

    function onCalculate() {
        const carDistance = tank * mpg;
        if (carDistance >= distance) setResult('We will reach the gas station.');
        else setResult('We will not get to the gas station')
    }

    function startAnimation() {
        if(result === 'We will reach the gas station.') setClassName('animation-success');
        else setClassName('animation-fail');
    }

    return (
        <div className="App">
            {console.log('render')}
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
            <button onClick={startAnimation}>Start Animation</button>

            <hr/>

            {result}

            <hr/>
            <div>{tank}</div>
            <div>{mpg}</div>
            <div>{distance}</div>

            <hr/>

            <Animation className={className}/>

        </div>
    );
}

export default App;
