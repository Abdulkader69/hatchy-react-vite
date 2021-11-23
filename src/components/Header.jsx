// import { useState, useEffect } from 'react';
import Logo from "../components/assets/images/logo-hatchy.png"
import Mask from "../components/assets/images/metamask.svg"
const Header = () => {

    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    // window.addEventListener("scroll", () => {
    //     setScroll(window.scrollY > 50);
    // });
    // }, []);

    return (
        <header id="main-header" className={`bg-dark fixed transition-all flex justify-between z-[99] top-0 left-0 w-full sm:py-6 py-4 px-4`}>
            <div className="w-full max-w-container m-auto flex flex-wrap justify-between items-center">
                <div className="logo_wrap sm:w-[10%] w-full sm:text-left text-center">
                    <a className="w-full h-full inline-block">
                        <img className="w-14 sm:ml-0 m-auto" src={Logo} alt="logo" />
                    </a>
                </div>
                <div className="menu-wrap sm:w-[90%] w-full flex sm:justify-end justify-center items-center">
                    <div className="header-btn-wrap md:pr-12">
                        <a className="inline-flex items-center bg-white sm:text-base text-sm text-dark px-2 py-[2px] sm:mr-5 mr-4" href="https://metamask.io/" target="_blank">Get <span className="text-[#dc3545] px-1">Metamask</span> <img src={Mask} alt="mask" /></a>
                        <a className="inline-block sm:text-base text-sm text-white" href="https://hatchypocket.com/market">Marketplace</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;