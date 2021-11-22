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
import Water1 from '../components/assets/images/avatars/water/10-sharakus_icon_shiny.png'
import Water2 from '../components/assets/images/avatars/water/11-sujin_icon_shiny.png'
import Water3 from '../components/assets/images/avatars/water/12-leviathan_icon_shiny.png'
import Water4 from '../components/assets/images/avatars/water/13-seaqueen_icon_shiny.png'
import Water5 from '../components/assets/images/avatars/water/14-naga_icon_shiny.png'
import Water6 from '../components/assets/images/avatars/water/15-mermos_icon_shiny.png'
import Water7 from '../components/assets/images/avatars/water/16-glacioise_icon_shiny.png'
import Water8 from '../components/assets/images/avatars/water/17-antarcticus_icon_shiny.png'
import Water9 from '../components/assets/images/avatars/water/18-woover_icon_shiny.png'

import FireBG from '../components/assets/images/bg-images/fire.png'
import Fire1 from '../components/assets/images/avatars/fire/19-lavekans_icon_shiny.png'
import Fire2 from '../components/assets/images/avatars/fire/20-calidus_icon_shiny.png'
import Fire3 from '../components/assets/images/avatars/fire/21-magmus_icon_shiny.png'
import Fire4 from '../components/assets/images/avatars/fire/22-chargoyle_icon_shiny.png'
import Fire5 from '../components/assets/images/avatars/fire/23-firadactus_icon_shiny.png'
import Fire6 from '../components/assets/images/avatars/fire/24-ignis_icon_shiny.png'
import Fire7 from '../components/assets/images/avatars/fire/25-blazeo_icon_shiny.png'
import Fire8 from '../components/assets/images/avatars/fire/26-phoenix_icon_shiny.png'
import Fire9 from '../components/assets/images/avatars/fire/27-flamus_icon_shiny.png'

import DarkBG from '../components/assets/images/bg-images/dark.png'
import Dark1 from '../components/assets/images/avatars/dark/28-goblen_icon_shiny.png'
import Dark2 from '../components/assets/images/avatars/dark/29-depedus_icon_shiny.png'
import Dark3 from '../components/assets/images/avatars/dark/30-darthys_icon_shiny.png'
import Dark4 from '../components/assets/images/avatars/dark/31-wraith_icon_shiny.png'
import Dark5 from '../components/assets/images/avatars/dark/32-wanderer_icon_shiny.png'
import Dark6 from '../components/assets/images/avatars/dark/33-baphomet_icon_shiny.png'

import LightBG from '../components/assets/images/bg-images/light.png'
import Light1 from '../components/assets/images/avatars/light/34-sentinel_icon_shiny.png'
import Light2 from '../components/assets/images/avatars/light/35-elkar_icon_shiny.png'
import Light3 from '../components/assets/images/avatars/light/36-lumenicia_icon_shiny.png'
import Light4 from '../components/assets/images/avatars/light/37-gryphon_icon_shiny.png'
import Light5 from '../components/assets/images/avatars/light/38-pegasus_icon_shiny.png'
import Light6 from '../components/assets/images/avatars/light/39-templar_icon_shiny.png'

const Lights = [
    {
        title: '#34 Sentinel',
        content: 'Because they have no desires of their own, a Sentinel can stay alert in guard position indefinitely',
        type: 'Light',
        height: '333',
        weight: '3333',
        icon: Light1,
        big_image: LightBG
    },
    {
        title: '#35 Elkar',
        content: 'The glowing golden antlers of the Elkar are so dense they can charge through diamond boulders',
        type: 'Light',
        height: '150',
        weight: '60',
        icon: Light2,
        big_image: LightBG
    },
    {
        title: '#36 Lumenicia',
        content: 'Highly sensitive, Lumenicia are able to communicate with light',
        type: 'Light',
        height: '180',
        weight: '1',
        icon: Light3,
        big_image: LightBG
    },
    {
        title: '#37 Gryphon',
        content: 'Gryphon can whip their tail to send a shockwave capable cutting through boulders from upto 20 metres away',
        type: 'Light',
        height: '380',
        weight: '770',
        icon: Light4,
        big_image: LightBG
    },
    {
        title: '#38 Pegasus',
        content: 'Pegasus gallop through the sky at such a speed and shine so bright, that they are often mistaken for shooting stars',
        type: 'Light',
        height: '420',
        weight: '600',
        icon: Light5,
        big_image: LightBG
    },
    {
        title: '#39 Templar',
        content: 'Templar wings are incredibly powerful allowing them to dart through the air and stop or take off immediately',
        type: 'Light',
        height: '270',
        weight: '160',
        icon: Light6,
        big_image: LightBG
    }
];

const Fires = [
    {
        title: '#19 Lavekans',
        content: 'Lavekans can be very territorial, and will try to kill any unwelcome intruder by biting it, wrapping around and greatly increasing their body temperature',
        type: 'Fire',
        height: '520',
        weight: '640',
        icon: Fire1,
        big_image: FireBG
    },
    {
        title: '#20 Calidus',
        content: 'When Calidus sense a threat they can start to burn hot enough to emit waves capable of burning steel from several metres away',
        type: 'Fire',
        height: '250',
        weight: '4500',
        icon: Fire2,
        big_image: FireBG
    },
    {
        title: '#21 Magmus',
        content: 'Magmus ooze a trail of lava as they move that can continue burning for several hours',
        type: 'Fire',
        height: '220',
        weight: '550',
        icon: Fire3,
        big_image: FireBG
    },
    {
        title: '#22 Chargoyle',
        content: 'Chargoyles usually nest in groups and are easily startled, often erupting their manes simultaneously at any perceived threat',
        type: 'Fire',
        height: '160',
        weight: '80',
        icon: Fire4,
        big_image: FireBG
    },
    {
        title: '#23 Firadactus',
        content: 'Firadactus use hot air under their wings to aid their flight, allowing them to soar for many days without needing to rest',
        type: 'Fire',
        height: '230',
        weight: '250',
        icon: Fire5,
        big_image: FireBG
    },
    {
        title: '#24 Ignis',
        content: 'When harmed Ignis emit a strong odour that alerts its hive of attackers',
        type: 'Fire',
        height: '60',
        weight: '10',
        icon: Fire6,
        big_image: FireBG
    },
    {
        title: '#25 Blazeo',
        content: 'If threatened, Blazeo fans out its burning tail to shield itself from attacks',
        type: 'Fire',
        height: '140',
        weight: '25',
        icon: Fire7,
        big_image: FireBG
    },
    {
        title: '#26 Phoenix',
        content: 'When Phoenix shed feathers, they can continue to burn unaided for many years, even underwater',
        type: 'Fire',
        height: '150',
        weight: '45',
        icon: Fire8,
        big_image: FireBG
    },
    {
        title: '#27 Flamus',
        content: 'Flamus can burn hot enough to melt the ground they stand on',
        type: 'Fire',
        height: '170',
        weight: '25',
        icon: Fire9,
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
        title: '#10 Sharakus',
        content: 'Sharakus are able to generate enough power while swimming to cause waves several hundred metres overhead',
        type: 'Water',
        height: '220',
        weight: '200',
        icon: Water1,
        big_image: WaterBG
    },
    {
        title: '#11 Sujin',
        content: 'Sujin are mischevious tricksters that are able to shape their watery bodies at will to mimic anything they have already seen',
        type: 'Water',
        height: '180',
        weight: '1',
        icon: Water2,
        big_image: WaterBG
    },
    {
        title: '#12 Leviathan',
        content: 'Leviathan usually drift through the deep ocean',
        type: 'Water',
        height: '410',
        weight: '800',
        icon: Water3,
        big_image: WaterBG
    },
    {
        title: '#13 Seaqueen',
        content: 'Seaqueen horns are coated with a powerful toxin that can potentially paralyze a target or attacker for several days',
        type: 'Water',
        height: '60',
        weight: '40',
        icon: Water4,
        big_image: WaterBG
    },
    {
        title: '#14 Naga',
        content: 'The Naga have a powerful muscular body allowing them to manoeuvre underwater with ease',
        type: 'Water',
        height: '160',
        weight: '60',
        icon: Water5,
        big_image: WaterBG
    },
    {
        title: '#15 Mermos',
        content: 'Despite not having bones, each tentacle on a Mermos is capable of crushing small rocks',
        type: 'Water',
        height: '220',
        weight: '180',
        icon: Water6,
        big_image: WaterBG
    },
    {
        title: '#16 Glacioise',
        content: 'The icey shards on the back of Glacioise move around so slowly that its often mistaken as a solid',
        type: 'Water',
        height: '80',
        weight: '250',
        icon: Water7,
        big_image: WaterBG
    },
    {
        title: '#17 Antarcticus',
        content: 'The wings of an Antarcticus emit a cold that can cause saturated clouds to erupt in snow when passed',
        type: 'Water',
        height: '100',
        weight: '30',
        icon: Water8,
        big_image: WaterBG
    },
    {
        title: '#18 Woover',
        content: 'Woovers travel in packs and able to chase down prey over extremely long distances',
        type: 'Water',
        height: '180',
        weight: '60',
        icon: Water9,
        big_image: WaterBG
    },
];

const Darks = [
    {
        title: '#28 Goblen',
        content: 'Goblens are social and work in groups, they can effectively communicate with eachother over long distances using their flames',
        type: 'Dark',
        height: '155',
        weight: '60',
        icon: Dark1,
        big_image: DarkBG
    },
    {
        title: '#29 Depedus',
        content: 'Depedus use earthquakes to form their complex tunnel networks, recorded in some areas at depths below the earths crust',
        type: 'Dark',
        height: '320',
        weight: '250',
        icon: Dark2,
        big_image: DarkBG
    },
    {
        title: '#30 Darthys',
        content: 'If something is killed nearby a Darthys, their soul may be sucked into the crystal on their back and trapped forever',
        type: 'Dark',
        height: '130',
        weight: '210',
        icon: Dark3,
        big_image: DarkBG
    },
    {
        title: '#31 Wraith',
        content: 'Wraith claws are harder than diamonds and can easily cut through steel',
        type: 'Dark4',
        height: '150',
        weight: '60',
        icon: Plant4,
        big_image: DarkBG
    },
    {
        title: '#32 Wanderer',
        content: 'Wanderers are said to be powerful warrior spirits, traveling the world, still searching for a worthy opponent',
        type: 'Dark',
        height: '180',
        weight: '80',
        icon: Dark5,
        big_image: DarkBG
    },
    {
        title: '#33 Baphomet',
        content: 'The Baphomet are highly deceptive shapeshifters that once commited may maintain a disguise for a whole human lifetime',
        type: 'Dark',
        height: '270',
        weight: '160',
        icon: Dark6,
        big_image: DarkBG
    }
];

// Wallet start Here

const Wallet1 = [
    {
        title: '#34 Sentinel',
        content: 'Because they have no desires of their own, a Sentinel can stay alert in guard position indefinitely',
        type: 'Light',
        height: '333',
        weight: '3333',
        icon: Light1,
        big_image: LightBG
    },
    {
        title: '#35 Elkar',
        content: 'The glowing golden antlers of the Elkar are so dense they can charge through diamond boulders',
        type: 'Light',
        height: '150',
        weight: '60',
        icon: Light2,
        big_image: LightBG
    },
    {
        title: '#36 Lumenicia',
        content: 'Highly sensitive, Lumenicia are able to communicate with light',
        type: 'Light',
        height: '180',
        weight: '1',
        icon: Light3,
        big_image: LightBG
    },
];

const Wallet2 = [
    {
        title: '#19 Lavekans',
        content: 'Lavekans can be very territorial, and will try to kill any unwelcome intruder by biting it, wrapping around and greatly increasing their body temperature',
        type: 'Fire',
        height: '520',
        weight: '640',
        icon: Fire1,
        big_image: FireBG
    },
    {
        title: '#20 Calidus',
        content: 'When Calidus sense a threat they can start to burn hot enough to emit waves capable of burning steel from several metres away',
        type: 'Fire',
        height: '250',
        weight: '4500',
        icon: Fire2,
        big_image: FireBG
    },
    {
        title: '#21 Magmus',
        content: 'Magmus ooze a trail of lava as they move that can continue burning for several hours',
        type: 'Fire',
        height: '220',
        weight: '550',
        icon: Fire3,
        big_image: FireBG
    },
];
const Wallet3 = [
    {
        title: '#10 Sharakus',
        content: 'Sharakus are able to generate enough power while swimming to cause waves several hundred metres overhead',
        type: 'Water',
        height: '220',
        weight: '200',
        icon: Water1,
        big_image: WaterBG
    },
    {
        title: '#11 Sujin',
        content: 'Sujin are mischevious tricksters that are able to shape their watery bodies at will to mimic anything they have already seen',
        type: 'Water',
        height: '180',
        weight: '1',
        icon: Water2,
        big_image: WaterBG
    },
    {
        title: '#12 Leviathan',
        content: 'Leviathan usually drift through the deep ocean',
        type: 'Water',
        height: '410',
        weight: '800',
        icon: Water3,
        big_image: WaterBG
    },
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
        title: '#28 Goblen',
        content: 'Goblens are social and work in groups, they can effectively communicate with eachother over long distances using their flames',
        type: 'Dark',
        height: '155',
        weight: '60',
        icon: Dark1,
        big_image: DarkBG
    },
    {
        title: '#29 Depedus',
        content: 'Depedus use earthquakes to form their complex tunnel networks, recorded in some areas at depths below the earths crust',
        type: 'Dark',
        height: '320',
        weight: '250',
        icon: Dark2,
        big_image: DarkBG
    },
    {
        title: '#30 Darthys',
        content: 'If something is killed nearby a Darthys, their soul may be sucked into the crystal on their back and trapped forever',
        type: 'Dark',
        height: '130',
        weight: '210',
        icon: Dark3,
        big_image: DarkBG
    },
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
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth',
        // });
    };

    return (
      <>
        <div className="hatchy-pocket-top-section pt-8 -mb-5">
            <div className="max-w-screen-lg m-auto px-4">
                <div className="f-full text-right mb-5">
                    <a className="py-1 px-2 border-solid border-black border-[1px] text-[rgba(255,249,51)] text-shadow inline-flex items-center" href="/"><span className="bg-[rgba(255,249,51)] h-4 w-4 inline-block mr-1 border-2 border-solid border-black"></span> 999 999 999</a>
                </div>
                <div className="flex justify-center items-start flex-wrap">
                    <div className="btn border-2 sm:w-40 w-32 min-h-[90px] mb-5 border-black border-solid py-1 px-2 bg-[rgba(199,194,193)] text-center sm:mx-4 mx-2">
                        <p className="text-[11px] uppercase text-white">monsters staking</p>
                        <h2 className="text-3xl">30</h2>
                        <p className="text-base uppercase text-[rgba(0,243,52)]">+1800</p>
                    </div>
                    <div className="btn border-2 sm:w-40 w-32 min-h-[90px] mb-5 border-black border-solid py-1 px-2 bg-white text-center sm:mx-4 mx-2">
                        <p className="text-xl uppercase text-[rgba(255,249,51)] text-shadow">rewards</p>
                        <h2 className="text-3xl">30</h2>
                        <p className="text-base uppercase text-[rgba(0,243,52)]">+1800</p>
                    </div>
                    <div className="btn border-2 sm:w-40 w-32 min-h-[90px] mb-5 border-black border-solid py-1 px-2 bg-[rgba(199,194,193)] text-center sm:mx-4 mx-2">
                        <p className="text-[11px] uppercase text-white">daily rewards</p>
                        <h2 className="text-3xl">800</h2>
                        <p className="text-base uppercase text-[rgba(0,243,52)]"></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hatchy-pocket-section overflow-hidden pt-8">
            <div className="max-w-screen-xl m-auto px-4">
                {currentAlbum && (
                    <div className="top-frame max-w-screen-lg m-auto my-6 xl:h-[600px] lg:h-[500px] md:h-[400px] h-[300px] relative border-2 border-dark border-solid shadow-box-s-sml">
                        <div className="flex h-full overflow-hidden"><img className="object-cover object-center w-full" src={currentAlbum.big_image} alt={currentAlbum.title} /></div>
                    </div>
                )}

                <div className="staking-section bg-gray-100 p-4 mt-12 mb-8">
                    <h2 className="text-dark text-2xl uppercase -mt-8">Staking</h2>
                    <div className="hatchy-action-section flex flex-wrap justify-start items-start md:pl-5 py-3">
                        <div className="hatchy-item hatchy-item1 flex flex-wrap xl:order-1 order-5 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full">
                            {Lights.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FFE600]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item2 flex flex-wrap xl:order-2 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full ">
                            {Fires.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FF3A3A]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item3 flex flex-wrap xl:order-3 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full ">
                            {Waters.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#4BD4FF]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item4 flex flex-wrap xl:order-4 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full ">
                            {Plants.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#44FF4C]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item5 flex flex-wrap xl:order-5 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full">
                            {Darks.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#AC0F93]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
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
                    <h2 className="text-dark text-2xl uppercase -mt-8">Wallet</h2>
                    <div className="hatchy-action-section flex flex-wrap justify-start items-start md:pl-5 py-3">
                        <div className="hatchy-item hatchy-item5 flex flex-wrap xl:order-1 order-5 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full">
                            {Wallet1.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FFE600]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item5 flex flex-wrap xl:order-2 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full">
                            {Wallet2.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#FF3A3A]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item5 flex flex-wrap xl:order-3 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full">
                            {Wallet3.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#4BD4FF]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item5 flex flex-wrap xl:order-4 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full">
                            {Wallet4.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#44FF4C]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
                                        <p className="text-[11px] mb-4">{album.content}</p>
                                        <p className="text-[11px] mb-4">Type: {album.type}</p>
                                        <p className="text-[11px]">Height: {album.height} - Weight: {album.weight}</p>
                                    </div>
                                </div>
                               
                            ))}
                        </div>
                        <div className="hatchy-item hatchy-item5 flex flex-wrap xl:order-5 xl:w-1/5 md:w-1/4 sm:w-2/6 w-full">
                            {Wallet5.map((album, index) => (
                                <div 
                                    className="item-card w-4/12 relative flex group cursor-pointer border-4 border-solid border-[#AC0F93]"
                                    key={album.title}
                                    ref={(e) => (clickIconsRef.current[index] = e)}
                                    onClick={() => handleAlbumClick(clickIconsRef.current[index], album)}
                                >
                                    <img className="object-cover object-center w-full" src={album.icon} alt={album.title} />
                                    <div className="hover-data absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible top-0 left-0 md:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.76)] text-white p-4 shadow-box-s-sml2 w-0 group-hover:w-[275px] h-[200px] transition-height-transition z-10 pointer-events-none">
                                        <h2 className="text-base mb-2">{album.title}</h2>
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
  