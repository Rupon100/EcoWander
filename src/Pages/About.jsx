import grpImg from '../assets/travel-grp.jpg'

const About = () => {
    return (
        <div className='my-16  flex gap-6 flex-col justify-center items-center text-center'>
            <div className='space-y-2 px-2 w-full md:w-4/5'>
               <span className='text-sm font-semibold text-sky-600'>Know Everything About Us</span>
               <h1 className='text-2xl md:text-4xl font-semibold'>About Our Team</h1>
               <p className='text-gray-800'>Eco Adventure is an exciting journey into the heart of nature, designed to combine outdoor thrills with a commitment to environmental stewardship. <span className='hidden md:inline'>This adventure offers participants the chance to explore pristine landscapes, engage in activities like hiking, kayaking, and wildlife observation, all while learning about conservation efforts and sustainable practices. Ideal for eco-conscious travelers and nature lovers, Eco Adventure aims to leave minimal impact on the environment.</span> </p>
            </div>
            <div className='w-full'>
                <img className='h-[400px] w-full object-cover' src={grpImg} alt="Group Image" />
            </div>
        </div>
    );
};

export default About;