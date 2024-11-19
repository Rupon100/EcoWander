import phoneImg from '../assets/phone1.jpg';
import emailImg from '../assets/mail.jpg';
import house from '../assets/house.jpg';

const Contact = () => {
    return (
        <div className="my-16 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center gap-6">
                <div>
                  <h2 className="font-semibold text-2xl md:text-4xl">Contact Us</h2>
                  <p className="text-gray-800">Let us know how we can best help you and we'll do our very best.</p>
                </div>
                <div className="space-y-2">
                    <div className="space-y-2">
                       <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                       <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div>
                      <textarea
                        placeholder="Message"
                        className="textarea textarea-bordered textarea-lg w-full max-w-xs resize-none" required></textarea>
                    </div>
                </div>
                <button className="btn border-none text-white bg-sky-600 hover:bg-sky-500">Send Your Message</button>
            </div>
            <div className="my-6 text-center flex flex-col md:flex-row gap-4">
                <div className='flex-1 flex gap-2 flex-col justify-center items-center border rounded-lg p-2'>
                    <img className='w-14 h-14' src={house} alt="house Img" />
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p>12 no house Happy Homes, Tejgoan, Dhaka</p>
                </div>
                <div className='flex-1 flex gap-2 flex-col justify-center items-center border rounded-lg p-2'>
                    <img className='w-14 h-14' src={phoneImg} alt="phone icon" />
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p>Mobile: +8801842482658</p>
                    <p>Hotline: 999111</p>
                </div>
                <div className='flex-1 flex gap-2 flex-col justify-center items-center border rounded-lg p-2'>
                    <img className='w-14 h-14' src={emailImg} alt="email icon" />
                    <h3 className="font-semibold text-lg">Mail Us</h3>
                    <p>Info: sidkaalex@gmail.com</p>
                    <p>Service Mail: fardi@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;