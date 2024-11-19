import slide4 from '../assets/slide4.jpg'

const Wildlife = () => {
    return (
        <div>
            <img className='h-[350px] md:h-[450px] w-full object-cover' src={slide4} alt="mountain" />
            <div className='w-11/12 md:w-9/12 mx-auto space-y-6 p-4 text-center'>
                <div className='space-y-4'>
                    <h1 className="text-2xl md:text-4xl font-bold animate__animated animate__bounceIn">Wildlife Safari Wonders</h1>
                    <p className='text-left'>
                        Wildlife Safari Wonders is an unforgettable journey into the heart of nature, where the world’s most fascinating animals roam freely in their natural habitat. As you traverse sprawling savannas, lush forests, or vast grasslands, each moment holds the potential for a breathtaking sight—a pride of lions lounging in the shade, elephants bathing in a river, or a graceful herd of antelope moving across the plains. Guided by expert trackers, you’ll learn about the delicate balance of ecosystems and the unique behaviors of each species. Every glimpse offers a sense of awe and respect, as the raw beauty of wildlife unfolds just a few steps away, making Wildlife Safari Wonders an experience of true discovery and connection with the natural world.
                    </p>
                </div>
                <div className='text-left'>
                    <h1 className="text-xl md:text-2xl font-bold animate__animated animate__bounceIn">Wildlife Safety Guide</h1>
                    <p>
                        With the right knowledge, your wildlife tracking adventure will be both safer and more enjoyable. Learn about animal behavior, discover the best ways to avoid encounters with dangerous wildlife, and read up on how to navigate diverse terrains safely. You can find all our related pages on wildlife tracking safety at the bottom of this page.
                    </p>
                    <span className='font-semibold text-red-600'>
                       If you do get into difficulty and need assistance, please call 999 and ask for Police Bangladesh, then ask for Windlife Rescue.
                    </span>
                </div>
            </div>
       </div>
    );
};

export default Wildlife;