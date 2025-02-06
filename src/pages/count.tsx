import '../assets/css/count.css';
import { useState } from 'react';

export default function Count(){

    return(
        <>
        <CountSplit/>
        <CountTogether/>
        </>
    )

}

function CountSplit(){
    return(
        <>
        <div className="countDiv">
            <h1>
                Compteur de clique état séparé:
            </h1>
            <ButtonSplit />
            <ButtonSplit/>
        </div>
        </>
    );
}

function CountTogether(){
    const [countTogether, setCountTogether] = useState(0)

    return(
        <>
        <div className='countDiv'>
            <h1>
                Compteur de clique état partagé:
            </h1>
            <button onClick={() => setCountTogether(countTogether + 1)}>
                        Clique: {countTogether}
            </button>
            <button onClick={() => setCountTogether(countTogether + 1)}>
                        Clique: {countTogether}
            </button>
        </div>
        </>
    )
}

function ButtonSplit(){
    const [count, setCount] = useState(0);

    return(
        <button onClick={() => setCount(count + 1)}>
                    Clique: {count}
        </button>
    )
}