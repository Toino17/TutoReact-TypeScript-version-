import ReactLogo from '../comp/reactLogo';
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
            <ReactLogo />
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
                <ButtonLink href = "/task" name= "Tâches"/>
            </div>
        </div>
    );
}



interface PropsButtonLink {
    href?: string;
    name: string;
}

export function ButtonLink({href, name}: PropsButtonLink){
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

