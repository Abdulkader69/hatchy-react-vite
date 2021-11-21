import { useState, useEffect, useRef } from 'react';
import PlantBG from '../components/assets/images/bg-images/plant.png'
import Plant1 from '../components/assets/images/avatars/plant/01-solarion_icon_shiny.png'
import Plant2 from '../components/assets/images/avatars/plant/02-mangris_icon_shiny.png'
import Plant3 from '../components/assets/images/avatars/plant/03-sporeleon_icon_shiny.png'
import Plant4 from '../components/assets/images/avatars/plant/04-bazub_icon_shiny.png'
import Plant5 from '../components/assets/images/avatars/plant/05-bolbon_icon_shiny.png'
import Plant6 from '../components/assets/images/avatars/plant/06-nocterra_icon_shiny.png'
import Plant7 from '../components/assets/images/avatars/plant/07-lycospore_icon_shiny.png'
import Plant8 from '../components/assets/images/avatars/plant/08-florean_icon_shiny.png'
import Plant9 from '../components/assets/images/avatars/plant/09-koranok_icon_shiny.png'

import WaterBG from '../components/assets/images/bg-images/water.png'
import FireBG from '../components/assets/images/bg-images/fire.png'
import DarkBG from '../components/assets/images/bg-images/dark.png'
import LightBG from '../components/assets/images/bg-images/light.png'

const Lights = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: LightBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: LightBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: LightBG
    },
    {
        title: '#4 Bazub',
        content: 'Bazub swarms are deadly and destructive, a swarm can destroy an entire crop in minutes',
        type: 'Plant',
        height: '30',
        weight: '5',
        icon: Plant4,
        big_image: LightBG
    },
    {
        title: '#5 Bolbon',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '200',
        weight: '2000',
        icon: Plant5,
        big_image: LightBG
    },
    {
        title: '#6 Nocterra',
        content: 'Nocterra can spread halucinogenic pollen which can severely disorient travellers',
        type: 'Plant',
        height: '80',
        weight: '100',
        icon: Plant6,
        big_image: LightBG
    }
];

const Fires = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: FireBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: FireBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: FireBG
    },
    {
        title: '#4 Bazub',
        content: 'Bazub swarms are deadly and destructive, a swarm can destroy an entire crop in minutes',
        type: 'Plant',
        height: '30',
        weight: '5',
        icon: Plant4,
        big_image: FireBG
    },
    {
        title: '#5 Bolbon',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '200',
        weight: '2000',
        icon: Plant5,
        big_image: FireBG
    },
    {
        title: '#6 Nocterra',
        content: 'Nocterra can spread halucinogenic pollen which can severely disorient travellers',
        type: 'Plant',
        height: '80',
        weight: '100',
        icon: Plant6,
        big_image: FireBG
    },
    {
        title: '#7 Lycospore',
        content: 'Each of Lycospores billions of spores is potent enough to immobilise an attacker for upto several hours',
        type: 'Plant',
        height: '60',
        weight: '120',
        icon: Plant7,
        big_image: FireBG
    },
    {
        title: '#8 Florean',
        content: 'Florean vines are extremely durable, they can root themselves to the ground and become immovable',
        type: 'Plant',
        height: '210',
        weight: '90',
        icon: Plant8,
        big_image: FireBG
    },
    {
        title: '#9 Koranok',
        content: 'Koranok claws are able to burrow through bedrock to nest',
        type: 'Plant',
        height: '350',
        weight: '1400',
        icon: Plant9,
        big_image: FireBG
    },
];
const Plants = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: PlantBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: PlantBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: PlantBG
    },
    {
        title: '#4 Bazub',
        content: 'Bazub swarms are deadly and destructive, a swarm can destroy an entire crop in minutes',
        type: 'Plant',
        height: '30',
        weight: '5',
        icon: Plant4,
        big_image: PlantBG
    },
    {
        title: '#5 Bolbon',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '200',
        weight: '2000',
        icon: Plant5,
        big_image: PlantBG
    },
    {
        title: '#6 Nocterra',
        content: 'Nocterra can spread halucinogenic pollen which can severely disorient travellers',
        type: 'Plant',
        height: '80',
        weight: '100',
        icon: Plant6,
        big_image: PlantBG
    },
    {
        title: '#7 Lycospore',
        content: 'Each of Lycospores billions of spores is potent enough to immobilise an attacker for upto several hours',
        type: 'Plant',
        height: '60',
        weight: '120',
        icon: Plant7,
        big_image: PlantBG
    },
    {
        title: '#8 Florean',
        content: 'Florean vines are extremely durable, they can root themselves to the ground and become immovable',
        type: 'Plant',
        height: '210',
        weight: '90',
        icon: Plant8,
        big_image: PlantBG
    },
    {
        title: '#9 Koranok',
        content: 'Koranok claws are able to burrow through bedrock to nest',
        type: 'Plant',
        height: '350',
        weight: '1400',
        icon: Plant9,
        big_image: PlantBG
    },
];

const Waters = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: WaterBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: WaterBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: WaterBG
    },
    {
        title: '#4 Bazub',
        content: 'Bazub swarms are deadly and destructive, a swarm can destroy an entire crop in minutes',
        type: 'Plant',
        height: '30',
        weight: '5',
        icon: Plant4,
        big_image: WaterBG
    },
    {
        title: '#5 Bolbon',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '200',
        weight: '2000',
        icon: Plant5,
        big_image: WaterBG
    },
    {
        title: '#6 Nocterra',
        content: 'Nocterra can spread halucinogenic pollen which can severely disorient travellers',
        type: 'Plant',
        height: '80',
        weight: '100',
        icon: Plant6,
        big_image: WaterBG
    },
    {
        title: '#7 Lycospore',
        content: 'Each of Lycospores billions of spores is potent enough to immobilise an attacker for upto several hours',
        type: 'Plant',
        height: '60',
        weight: '120',
        icon: Plant7,
        big_image: WaterBG
    },
    {
        title: '#8 Florean',
        content: 'Florean vines are extremely durable, they can root themselves to the ground and become immovable',
        type: 'Plant',
        height: '210',
        weight: '90',
        icon: Plant8,
        big_image: WaterBG
    },
    {
        title: '#9 Koranok',
        content: 'Koranok claws are able to burrow through bedrock to nest',
        type: 'Plant',
        height: '350',
        weight: '1400',
        icon: Plant9,
        big_image: WaterBG
    },
];

const Darks = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: DarkBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: DarkBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: DarkBG
    },
    {
        title: '#4 Bazub',
        content: 'Bazub swarms are deadly and destructive, a swarm can destroy an entire crop in minutes',
        type: 'Plant',
        height: '30',
        weight: '5',
        icon: Plant4,
        big_image: DarkBG
    },
    {
        title: '#5 Bolbon',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '200',
        weight: '2000',
        icon: Plant5,
        big_image: DarkBG
    },
    {
        title: '#6 Nocterra',
        content: 'Nocterra can spread halucinogenic pollen which can severely disorient travellers',
        type: 'Plant',
        height: '80',
        weight: '100',
        icon: Plant6,
        big_image: DarkBG
    }
];

// Wallet start Here

const Wallet1 = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: LightBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: LightBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: LightBG
    }
];

const Wallet2 = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: FireBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: FireBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: FireBG
    }
];
const Wallet3 = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: PlantBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: PlantBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: PlantBG
    }
];

const Wallet4 = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: WaterBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: WaterBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: WaterBG
    }
];

const Wallet5 = [
    {
        title: '#1 Solarion',
        content: 'Self sufficient and able to produce their own light, Solarion often live in solidarity',
        type: 'Plant',
        height: '180',
        weight: '450',
        icon: Plant1,
        big_image: DarkBG
    },
    {
        title: '#2 Mangris',
        content: 'Mangris are able to confuse prey with their floral crest to approach near enough to grab them with their deadly pincirs',
        type: 'Plant',
        height: '60',
        weight: '20',
        icon: Plant2,
        big_image: DarkBG
    },
    {
        title: '#3 Sporeleon',
        content: 'Able to traverse up tall trees, Sporeleon are often found perched high in the canopy',
        type: 'Plant',
        height: '100',
        weight: '35',
        icon: Plant3,
        big_image: DarkBG
    }
];



function HatchyAlbum( ) {
    const [currentAlbum, setCurrentAlbum] = useState(null);
    const clickIconsRef = useRef([]);


    /* eslint react-hooks/exhaustive-deps: "off" */
    useEffect(() => {
        // Set the first project on visible part
        setCurrentAlbum(Plants[0]);

        // Wait for the whole thing to load then trigger the first animation
        setTimeout(() => {
            clickIconsRef.current[0].classList.add('active');
        }, 1300);
    }, [Plants]);

    const asyncSequence = async (album) => {
        await setCurrentAlbum(album);
    };

    const handleAlbumClick = (elm, album) => {
        if (album !== currentAlbum) {
          const linkList = clickIconsRef.current;
          const filteredItems = linkList.filter((item) => item !== elm);
          elm.classList.add('active');
          filteredItems.map((item) => item.classList.remove('active'));
    
          asyncSequence(album);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
      <>
        <div className="hatchy-pocket-section">
            <div className="max-w-screen-xl m-auto px-4">
                {currentAlbum && (
                    <div className="top-frame max-w-screen-lg m-auto my-6 h-[600px] relative border-2 border-dark border-solid shadow-box-s-sml">
                        <div className="flex h-full overflow-hidden"><img className="object-cover object-center w-full" src={currentAlbum.big_image} alt={currentAlbum.title} /></div>
                    </div>
                )}

                <div className="staking-section bg-gray-100 p-4 mt-12 mb-8">
                    <h2 className="text-dark text-4xl uppercase -mt-10">Staking</h2>
                    <div className="hatchy-action-section flex flex-wrap items-start pl-5 py-3">
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Lights.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FFE600]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Fires.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FF3A3A]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Waters.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#4BD4FF]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Plants.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#44FF4C]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Darks.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#AC0F93]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                    </div>
                </div>
                <div className="wallet-section bg-gray-100 p-4 mt-12 mb-8">
                    <h2 className="text-dark text-4xl uppercase -mt-10">Wallet</h2>
                    <div className="hatchy-action-section flex flex-wrap items-start pl-5 py-3">
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Wallet1.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FFE600]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Wallet2.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FF3A3A]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Wallet3.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#4BD4FF]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Wallet4.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#44FF4C]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item flex flex-wrap w-1/5">
                            {Wallet5.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#AC0F93]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 bg-[rgba(0,0,0,.85)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </>
    );
}
  
export default HatchyAlbum;
  