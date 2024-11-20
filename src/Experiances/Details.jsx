import { useLoaderData} from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import { set } from 'date-fns';
import Swal from 'sweetalert2'
 
const Details = () => {
    const { title, image, categoryName, shortDescription, adventureCost, bookingAvailability,location, duration, adventureLevel, includedItems,ecoFriendlyFeatures,maxGroupSize,specialInstructions } = useLoaderData();

    const handleTalkExpert = () => {
        const current = new Date();

        const startTime = set(current, {hours: 10, minutes: 0, seconds: 0, milliseconds: 0});
        const endTime = set(current, { hours: 20, minutes: 0, seconds: 0, milliseconds: 0 });

        if(current >= startTime && current <= endTime){
            window.open("https://meet.google.com/ust-uxts-ftk")
        }else{
            return Swal.fire({
                title: "Time is up now!",
                text: "Available for consultation: 10:00 AM - 8:00 PM",
                icon: "info",
                confirmButtonText: "Ok"
            });
        }
    }
    
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mx-2  my-4 p-4 border rounded-md flex justify-center items-center flex-col  gap-4">
               <div className="w-ful h-64 md:w-full">
                  <img className="w-full h-full object-cover rounded-md" src={image} alt="details image" />
               </div>
               <div className="w-full md:w-full p-2 space-y-2 md:space-y-4">
                 <span className="font-medium text-sm border p-1 rounded">{categoryName}</span>
                 <h1 className="font-semibold text-2xl">{title}</h1>
                 <p className="text-sm">{shortDescription}</p>
                 <div className="flex gap-6">
                    <h4 className="text-lg font-semibold">Cost: {adventureCost}$</h4>
                    <div className="flex gap-1">
                        <h2>Booking Availability: </h2>
                        {
                           bookingAvailability ? <p className="text-sky-600 font-semibold">Available</p> : <p className="text-red-500 font-semibold">Unavailable</p>
                        }
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <p>Location: <span className="font-semibold">{location}</span></p>
                    <p>Duration: <span className="font-semibold">{duration}</span></p>
                 </div>
                 <p className="font-semibold text-lg">Group Size: <span className="text-sky-600">{maxGroupSize}</span></p>
                 <div className="space-y-2">
                    <h2 className="text-xl font-semibold">You need to carry</h2>
                    <ul className="list-none list-inside flex-wrap flex gap-1">
                        {
                            includedItems.map((item, id) => <li className="p-1 text-sm rounded-lg border border-black" key={id}>{item}</li>)
                        }
                    </ul>
                 </div>
                 <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Features</h2>
                    <ul className="list-none list-inside flex flex-wrap gap-2">
                        {
                            ecoFriendlyFeatures.map((item, id) => <li className="p-1 text-sm rounded-lg border border-black" key={id}>{item}</li>)
                        }
                    </ul>
                 </div>
                 <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Special Instructions</h2>
                    <ul className="list-none list-inside flex gap-2 flex-wrap">
                        {
                            specialInstructions.map((item, id) => <li className="p-1 text-sm rounded-lg border border-black" key={id}>{item}</li>)
                        }
                    </ul>
                 </div>
               </div>
               <button onClick={handleTalkExpert} className="flex gap-2 justify-center items-center border-none px-6 py-2 rounded bg-sky-600 text-white hover:bg-sky-500 transition-all">
                 <p>Talk With Expert</p>
                 <span>
                   <FaVideo />
                 </span>
               </button>
            </div>
        </div>
    );
};

export default Details;