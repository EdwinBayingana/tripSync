import React from 'react';
import { calculateDistance, calculateETA } from '../../utils/mapCalcs';
import { busStops } from '../../data/mapsData';

type ITripDetailsProps = {
  driverLocationIndex: number;
  nextStop: string;
};

export const TripDetails = ({
  driverLocationIndex,
  nextStop,
}: ITripDetailsProps) => {
  return (
    <div className="text-white text-lg md:text-xl h-[20%] flex-col p-[2%] justify-between items-center flex absolute w-full top-[10%]">
      <div className="flex items-center justify-between w-full h-full text-2xl font-semibold">
        <h5 className="text-[#616161]">
          {busStops[0].name} to {busStops[busStops.length - 1].name}
        </h5>
      </div>
      <div className="flex items-center justify-between w-full h-full">
        <h5>Next stop: {nextStop}</h5>
      </div>
      <div className="flex flex-row items-start justify-between w-full h-full">
        <h5>
          Distance:
          {calculateDistance(
            busStops[driverLocationIndex],
            busStops[driverLocationIndex + 1],
          ) / 1000}
          &nbsp;km
        </h5>
        <h5>
          Time: {calculateETA(driverLocationIndex + 1, busStops)} minutes
          {nextStop ? ' to' : ''} {nextStop}
        </h5>
      </div>
    </div>
  );
};
