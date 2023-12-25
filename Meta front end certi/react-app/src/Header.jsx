import reactLogo from './assets/react.svg';
import './Header.css'

export default function Header (props){
    const menuToggle = document.querySelector('.menu-toggle')
    const menu = document.querySelector('.nav-menu')

    console.log(props.children)

    const toggleMenu = () => {
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
    }


    return (
        <header className='header'>
            <nav className='nav'>

                <a href="_blank" className='logo'>
                    <img className='logo-img' src={reactLogo} alt="" />
                    <span className='logo-text'>React</span>
                </a>
                
                <div className="nav-menu">
                    
                    <img className='menu-logo-mobile' src={reactLogo} alt="" />

                    <ul className="menu">
                        <li className="menu-item"><a href="" className="menu-links">Products <i className="ri-arrow-down-s-line"></i></a></li>
                        <li className="menu-item"><a href="" className="menu-links">Templates <i className="ri-arrow-down-s-line"></i></a></li>
                        <li className="menu-item"><a href="" className="menu-links">Pricing <i className="ri-arrow-down-s-line"></i></a></li>
                        <li className="menu-item"><a href="" className="menu-links">Reviews <i className="ri-arrow-down-s-line"></i></a></li>
                    </ul>

                    <div className="button-group">

                        <button className="login-btn">
                            LOG IN
                        </button>

                        <button className="start-free-btn">
                            START FREE
                        </button>
                    </div>
                </div>

                <button onClick={toggleMenu} className="menu-toggle screen-lg-hidden">
                    <i className="ri-menu-line bar-icon"></i>
                    <i className="ri-close-line close-icon"></i>
                </button>
            </nav>
        </header>
    )
}