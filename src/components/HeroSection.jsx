import HeroBG from "../components/assets/images/bg1.png"
import Logo from "../components/assets/images/logo-hatchy.png"
import Gif from "../components/assets/images/solarion.gif"
import shine from "../components/assets/images/shiny.png"
import audio from "../components/assets/audio/sporeleon.wav"
const HeroSection = () => {

    return (
        <div className="hero-section before-bg relative flex-wrap lg:pt-36 sm:pt-24 pt-32 z-50 px-4 md:pb-0 pb-5 text-center">
            <img className="w-full h-full absolute object-cover top-0 left-0 object-center z-0 pointer-events-none" src={HeroBG} alt="bg" />
            <img className="relative z-20 w-full lg:max-w-md sm:max-w-[250px] max-w-[200px] m-auto" src={Logo} alt="bg" />
            <h2 className="relative z-20 text-white lg:text-2xl sm:text-xl text-base lg:mb-8 sm:mb-5 mb-3">DIGITAL COLLECTABLES ON AVALANCHE NETWORK</h2>
            <h1 className="relative z-20 text-black lg:text-6xl sm:text-5xl text-4xl unheaval text-stroke sm:mb-28 mb-32  ">WHAT IS HATCHY POCKET?</h1>
            <div className="what-is-hatchy-bg relative w-full max-w-[1060px] m-auto z-20 mt-5 flex md:flex-nowrap flex-wrap items-center md:justify-between justify-center">
                <div className="hatchy-card1 mt-5 pt-5">
                    <div className="hatchy-images relative">
                        <img className="absolute -bottom-3  left-0 right-0 m-auto w-44 z-20" src={Gif} alt="gif" />
                    </div>
                    <div className="hatchy-metadata md:-mb-5 overflow-hidden w-[280px] transition-all pb-5 border-2 border-solid border-[#605000] bg-[#f4d842] text-center relative">
                        <img className="shiny" src={shine} alt="" />
                        <h4 className="text-xl text-dark">Solarion</h4>
                        <div className="description flex items-center justify-center min-h-[75px] text-[10px] py-2 my-1 mx-2 bg-[rgba(0,0,0,.15)] drop-shadow-[inset 0 4px 6px rgb(0 0 0 / 20%)]">
                            Lone beast capable of creating its own light for photosynthesis
                        </div>
                        <div className="props py-2 my-1 px-5">
                            <div className="h-w px-8 text-[9px] flex justify-between items-center mb-1">
                                <span>Height XXXcm</span>
                                <span>Weight XXXkg</span>
                            </div>
                            <div className="sub flex justify-between items-center text-[11px] font-bold px-6">
                                <span>GEN1</span>
                                <span>00/00</span>
                                <span>ID: 000</span>
                            </div>
                        </div>
                        <div className="audio-player">
                            <audio
                                controls
                                src={audio}
                            >
                                Your browser does not support the
                                    <code>audio</code> element.
                            </audio>
                        </div>
                    </div>
                </div>
                <p className="w-75 mx-auto md:py-0 py-9 px-5 what-is-hatchy-text lg:text-2xl md:text-xl text-lg text-black md:text-left text-center">Hatchy pocket is a high fidelity, new age, exclusive digital monster collectable, with limited numbers. Immortalized and proven by NFT technology!</p>
            </div>
        </div>
    )
}
export default HeroSection;