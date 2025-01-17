 
import { Link, useParams } from 'react-router-dom';

const ExperianceCard = ({ experiances }) => {
    const { id ,title, image, ecoFriendlyFeatures } = experiances;

     
     
    return (
        <div className="card bg-base-100 border flex flex-col">
          <figure>
            <img 
              className='h-[300px] w-full object-cover'
              src={image}
              alt="travel image" />
          </figure>
          <div className="card-body p-4 flex-grow">
            <h2 className="card-title">
              {title}
            </h2>
            <div className="card-actions justify-start">
                <ul className='flex gap-2 flex-wrap'>
                   { 
                     ecoFriendlyFeatures.map((eco) => <li className='badge badge-outline list-none p-2' key={id}>{eco}</li>) 
                   }
                </ul>
            </div>
          </div>
          <Link to={`experiances/${id}`} className='w-full p-4 text-center font-semibold bg-sky-300 transition-all hover:bg-sky-500 hover:text-white rounded-b-xl'>Explore More</Link>
        </div>
    );
};

export default ExperianceCard;