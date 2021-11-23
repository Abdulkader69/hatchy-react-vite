import FooterBG from "../components/assets/images/bg-images/dark.png"
import PowerBY from "../components/assets/images/poweredby.png"
import Discord from "../components/assets/images/discord-icon.svg"
import Twitter from "../components/assets/images/twitter.svg"
import Tiles from "../components/assets/images/tiles.png"
const Footer = () => {

    return (
        <>
            <div className="footer-tiles flex lg:h-[109px] md:h-12 h-8">
                <img className="object-cover object-center w-full h-hull" src={Tiles} alt="tiles" />
            </div>
            <footer id="main-footer" className="relative z-50 px-4 py-12 before-bg text-center">
                <img className="w-full h-full absolute object-cover top-0 left-0 object-center z-0 pointer-events-none" src={FooterBG} alt="bg" />
                <div className="social relative z-20 flex items-center justify-center mb-2">
                    <a href="https://twitter.com/HatchyPocket" target="_blank"><img className="w-7" src={Twitter} alt="twitter" /></a>
                    <a className="ml-2" href="https://discord.gg/cW378HVjyY" target="_blank"><img className="w-8" src={Discord} alt="discord" /></a>
                </div>
                <h3 className="relative z-20 text-white text-base">Hatchy Pockets 2021 ©</h3>
                <img className="relative z-20 h-12 mt-6 m-auto" src={PowerBY} alt="powerby" />
            </footer>
        </>
    )
}
export default Footer;