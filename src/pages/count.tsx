import '../assets/css/count.css';
import { useState } from 'react';
import ReactLogo from '../comp/reactLogo';

export default function Count(){

    return(
        <>
        <ReactLogo />
        <section className='countMainSection'>
            <h1>Compteur d'état:</h1>
            <div className='countMainDiv'>
                <CountSplit/>
                <CountTogether/>
            </div>
        </section>
        </>
    )

}

function CountSplit(){
    return(
        <>
        <div className="countDiv">
            <h2>
                Compteur de clique état séparé:
            </h2>
            <div className='divButton'>
                <ButtonSplit />
                <ButtonSplit/>
            </div>
            <p>On stock l'état dans le composant ButtonSplit</p>
        </div>
        </>
    );
}

function CountTogether(){
    const [countTogether, setCountTogether] = useState(0)

    return(
        <>
        <div className='countDiv'>
            <h2>
                Compteur de clique état partagé:
            </h2>
            <div className='divButton'>
                <button onClick={() => setCountTogether(countTogether + 1)}>
                            Clique: {countTogether}
                </button>
                <button onClick={() => setCountTogether(countTogether + 1)}>
                            Clique: {countTogether}
                </button>
            </div>
            <p>On stock l'état dans le composant mère CountTogether</p>
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