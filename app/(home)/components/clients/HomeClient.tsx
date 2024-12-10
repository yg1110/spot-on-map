'use client';
import { Map } from 'react-kakao-maps-sdk';

const HomeClient = () => {
  return (
    <div className="h-screen w-screen ">
      <Map
        className="h-full w-full"
        center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
      ></Map>
    </div>
  );
};

export default HomeClient;
