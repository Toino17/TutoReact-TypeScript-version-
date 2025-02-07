import '../assets/css/App.css';
import reactLogo from '../assets/svg/react.svg'
import gitHubLogo from '../assets/svg/gitHub.svg'

export default function Navbar(){

    return(
        <>
        <nav>
                <div className="logoNavReact">
                    <a href="/">
                        <img src={reactLogo} alt="reactLogo"/>
                        <span>React</span>
                    </a>
                </div>
            
            <ul className='ulNav'>
                <li className='link'><a href="">Apprendre</a></li>
                <li  className='link'><a href="">Doc</a></li>
                <li className='logoNav'><a href="https://github.com/Toino17" target='_blank'><img src={gitHubLogo} className="gitHubLogo" alt="gitHubLogo" /></a></li>
            </ul>
        </nav>
        </>
    );
}