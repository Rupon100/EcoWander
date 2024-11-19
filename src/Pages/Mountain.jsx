import slide2 from '../assets/slide2.jpg'

const Mountain = () => {
    return (
        <div>
            <img className='h-[350px] md:h-[450px] w-full object-cover' src={slide2} alt="mountain" />
            <div className='w-9/12 mx-auto space-y-6 p-4 text-center'>
                <div className='space-y-4'>
                    <h1 className="text-2xl md:text-4xl font-bold animate__animated animate__bounceIn">Mountain Whisper Trails</h1>
                    <p className='text-left'>
                       A mountain adventure is an exhilarating journey through rugged terrain, where the beauty of nature meets the thrill of exploration. Adventurers hike along winding trails, ascend rocky slopes, and navigate dense forests, all while breathing in the crisp, fresh mountain air. Every step reveals stunning views—snow-capped peaks, cascading waterfalls, and sweeping valleys bathed in sunlight. Along the way, wildlife sightings, serene lakes, and hidden caves add to the excitement. Whether reaching a summit or camping under starlit skies, a mountain adventure is a perfect blend of challenge and wonder, offering a deep sense of accomplishment and a closer connection to nature.
                    </p>
                </div>
                <div className='text-left'>
                    <h1 className="text-xl md:text-2xl font-bold animate__animated animate__bounceIn">All about mountain safety </h1>
                    <p>
                       With the right knowledge, your mountain trip will be both safer and more enjoyable. Learn about avalanches, find out how to best prevent injuries, or read about how to safely ford rivers during your hike. You can find all our related pages on mountain safety at the bottom of this page.
                    </p>
                    <span className='font-semibold text-red-600'>
                       If you do get into difficulty and need assistance, please call 999 and ask for Police Bangladesh, then ask for Mountain Rescue.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Mountain;