import reactLogo from '../assets/svg/react.svg';
import '../assets/css/App.css'


export default function  Home(){
    return(
        <>
            <Bienvenue />
            <Exercices />
        </>
    );
}

function Bienvenue() {
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo" alt="React logo" />
                </a>
            </div>
            <h1>Bienvenue dans React</h1>
            <p className="read-the-docs">
                Clique sur le logo React pour plus d'informations
            </p>
        </>
    );
}

function Exercices(){
    return(
        <div className='ExercicesDiv'>
            <h2>Listes des exercices:</h2>
            <div>
                <ButtonLink href = "/tictactoe" name= "Tic-Tac-Toe"/>
                <ButtonLink href = "/count" name= "Compteur"/>
            </div>
        </div>
    );
}



interface PropsButtonLink {
    href: string;
    name: string;
}

function ButtonLink({href, name}: PropsButtonLink){
    return(
        <>
            <a href={href}>
                <button>
                    {name}
                </button>
            </a>
        </>
    );
}

