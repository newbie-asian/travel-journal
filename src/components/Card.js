import React from 'react';

const Card = ({ details }) => {
  return (
    <div className="container mx-auto">
      <div className="card m-8 rounded-xl flex overflow-hidden flex-col landscape:flex-row shadow-md">
        <img src={`./images/${details.locationImg}`} className=" md:basis-[20%]" alt="" />

        <div className="flex flex-col justify-between p-4 md:basis-[80%]">
          <div className="card-location">
            <img src={`./images/${details.locationIconImg}`} className="inline-block w-3 mr-1" alt="" />
            <span className="card-country uppercase tracking-wider text-dark-violet mr-3">{details.country}</span>
            <a href={details.googleMap} className="underline text-sm underline-offset-2 text-gray-400 text-light-gray">
              View on Google Maps
            </a>

            <h1 className="card--place text-dark-violet font-inter-bold text-3xl">{details.location}</h1>
          </div>

          <div>
            <p className="card--date text-dark-violet text-sm font-inter-bold mt-4 mb-2">{details.date}</p>
            <p className="card--details text-xs text-dark-violet">{details.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
