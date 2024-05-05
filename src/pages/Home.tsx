import { useState } from 'react';
import { Navbar, Map, TripDetails, TopSection } from '../components';
import { busStops } from '../data/mapsData';

export default function Home() {
  const [driverLocationIndex, setDriverLocationIndex] = useState(0);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const theDriverLocation = busStops[driverLocationIndex];
  const nextStop = busStops[driverLocationIndex + 1]
    ? busStops[driverLocationIndex + 1].name
    : '';

  return (
    <div
      className="flex flex-col w-full min-h-screen h-full relative text-white max-w-[430px] rounded-b-[50px]"
      style={{
        background: '#000000',
      }}
    >
      <TopSection
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
      />
      <TripDetails
        driverLocationIndex={driverLocationIndex}
        nextStop={nextStop}
      />
      <Map
        driverLocation={theDriverLocation || ''}
        setDriverLocationIndex={setDriverLocationIndex || ''}
      />
      <Navbar />
    </div>
  );
}
