import slide1 from '../assets/slide1.jpg';

const Forest = () => {
    return (
        <div>
            <img className='h-[350px] md:h-[450px] w-full object-cover' src={slide1} alt="mountain" />
            <div className='w-11/12 md:w-9/12 mx-auto space-y-6 p-4 text-center'>
                <div className='space-y-4'>
                    <h1 className="text-2xl md:text-4xl font-bold animate__animated animate__bounceIn">Mystic Forest Retreat</h1>
                    <p className='text-left'>
                        Forest camping and travel offer an immersive escape into nature’s peaceful embrace. As you hike through towering trees and lush greenery, you’ll encounter the sights and sounds of the wild—birds singing, leaves rustling, and streams flowing nearby. Set up camp under a canopy of stars, gather around a cozy campfire, and enjoy the simplicity and tranquility of life away from the bustling world. Forest camping invites you to connect with nature, explore scenic trails, and discover hidden spots where wildlife and natural beauty flourish, making each journey a rejuvenating and unforgettable experience.
                    </p>
                </div>
                <div className='text-left'>
                    <h1 className="text-xl md:text-2xl font-bold animate__animated animate__bounceIn">All About Forest Safety</h1>
                    <p>
                       With the right knowledge, your forest adventure will be both safer and more enjoyable. Learn about wildlife encounters, discover tips for navigating dense woods, and read about campfire safety and preparedness. You can find all our related pages on forest safety at the bottom of this page.
                    </p>
                    <span className='font-semibold text-red-600'>
                       If you do get into difficulty and need assistance, please call 999 and ask for Police Bangladesh, then ask for Forest Rescue.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Forest;