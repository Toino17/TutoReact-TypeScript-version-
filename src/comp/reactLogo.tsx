import reactLogo from '../assets/svg/react.svg'

export default function ReactLogo(){
    return(
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </a>
            </div>
        </>
    );
}