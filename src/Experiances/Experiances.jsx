import { useState, useEffect } from "react";
import ExperianceCard from "./ExperianceCard";

 
const Experiances = () => {
    
    const [data, setData] =  useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(resdata => setData(resdata))
    }, [])

     


    return (
        <div className="space-y-4">
            <h1 className="font-semibold text-xl md:text-2xl">Adventure Experiences</h1>
            <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map((d,i) => <ExperianceCard key={i} experiances={d}></ExperianceCard>)
                }
            </div>
        </div>
    );
};

export default Experiances;