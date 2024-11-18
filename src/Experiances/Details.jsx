import { useLoaderData, useParams } from "react-router-dom";

 
const Details = () => {
    const { id, title, image, categoryName, shortDescription, adventureCost, bookingAvailability,location, duration, adventureLevel, includedItems,ecoFriendlyFeatures,maxGroupSize,specialInstructions } = useLoaderData();
     
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mx-2  my-4 p-4 border rounded-md flex justify-center items-center flex-col  gap-4">
               <div className="w-ful h-64 md:w-full">
                  <img className="w-full h-full object-cover rounded-md" src={image} alt="details image" />
               </div>
               <div className="w-full md:w-full p-2 space-y-4">
                 <span className="font-medium text-sm border p-1 rounded">{categoryName}</span>
                 <h1 className="font-semibold text-2xl">{title}</h1>
                 <p className="text-sm">{shortDescription}</p>
                 <div className="flex gap-6">
                    <h4 className="text-lg font-semibold">Cost: {adventureCost}$</h4>
                    <div className="flex gap-1">
                        <h2>Seat: </h2>
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
            </div>
        </div>
    );
};

export default Details;