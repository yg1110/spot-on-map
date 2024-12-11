'use client';
import { useEffect, useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';

import { spotList } from '@/app/api/spots/get-spot-list';
import { SpotItem } from '@/schemas/SpotMap';

const MIN_CLUSTER_LEVEL = 6;
const MIN_CLUSTER_SIZE = 1;
const SEPARATE_CLUSTER_SIZES = [1, 10, 30, 50];
const INITIAL_MAP_CENTER_POSITION = {
  lat: 37.49704028978622,
  lng: 127.02790941672053,
};
const SpotsMap = () => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [cluster, setCluster] = useState<kakao.maps.MarkerClusterer | null>(null);

  const adjustLatLon = (lat: number, lng: number, index: number, distance = 0.00005) => {
    const angle = (index / 10) * 2 * Math.PI;
    const changeLat = lat + distance * Math.sin(angle);
    const changeLng = lng + distance * Math.cos(angle);
    return {
      lat: changeLat.toString(),
      lng: changeLng.toString(),
    };
  };

  const getUniqueMarkers = () => {
    const uniqueMarkers: SpotItem[] = [];
    const markerSet = new Set();
    spotList.forEach((marker, index) => {
      const markerKey = marker.x + marker.y;
      if (!markerSet.has(markerKey)) {
        markerSet.add(marker.x + marker.y);
        uniqueMarkers.push(marker);
      } else {
        const adjustedPosition = adjustLatLon(Number(marker.y), Number(marker.x), index);
        uniqueMarkers.push({
          ...marker,
          x: adjustedPosition.lng,
          y: adjustedPosition.lat,
        });
      }
    });
    return uniqueMarkers;
  };

  const onSelectHospital = (item: SpotItem) => {
    console.log('SpotItem :>> ', item);
  };

  const spotMakeMakerElement = (item: SpotItem) => {
    const root = document.createElement('div');
    root.className = 'flex flex-col items-center';
    root.addEventListener('click', () => onSelectHospital(item));
    const marker = document.createElement('div');
    marker.className =
      'max-w-[116px] rounded-lg bg-white border border-[#495057] p-[6px_10px] flex items-center justify-center';
    marker.innerHTML = `<p class="truncate text-[#495057] text-center text-[14px] font-bold">${item.name}</p>`;
    root.appendChild(marker);
    const icon = document.createElement('img');
    icon.style.content = `url(/icons/marker-arrow-off.svg)`;
    icon.className = 'w-[12px] h-[9px] z-1 mt-[-1px] font-size-[14px] font-weight-700 text-center';
    root.appendChild(icon);
    return root;
  };

  const renderMarker = () => {
    const level = map!.getLevel();
    if (level < 9) {
      const uniqueMarkers = getUniqueMarkers();
      const markerList = uniqueMarkers!.map((item) => {
        const markerContent = spotMakeMakerElement(item);
        const marker = new kakao.maps.CustomOverlay({
          position: new kakao.maps.LatLng(Number(item.y), Number(item.x)),
          map: map!,
          content: markerContent,
        });
        return marker;
      });
      cluster!.addMarkers(markerList);
    }
  };

  const onResetCluster = () => {
    if (!cluster) return;
    cluster.clear();
  };

  const onMapCreate = (updateMap: kakao.maps.Map) => {
    if (!updateMap) return;
    if (map) return;
    setMap(updateMap);
  };

  const onClusterCreate = (updateCluster: kakao.maps.MarkerClusterer | null) => {
    if (!updateCluster) return;
    if (cluster) return;
    setCluster(updateCluster);
  };

  useEffect(() => {
    if (!map || !cluster) return;
    onResetCluster();
    renderMarker();
  }, [map, cluster]);

  return (
    <Map className="h-full w-full" center={INITIAL_MAP_CENTER_POSITION} onCreate={onMapCreate}>
      <MarkerClusterer
        onCreate={onClusterCreate}
        averageCenter={true}
        minLevel={MIN_CLUSTER_LEVEL}
        minClusterSize={MIN_CLUSTER_SIZE}
        calculator={SEPARATE_CLUSTER_SIZES}
        styles={clusterStyles}
      />
    </Map>
  );
};

export default SpotsMap;

const clusterStyles = [
  {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    background: '#495057',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '-0.5px',
  },
  {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    background: '#495057',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '-0.5px',
  },
  {
    width: '60px',
    height: '60px',
    borderRadius: '40px',
    background: '#495057',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '-0.5px',
  },
  {
    width: '120px',
    height: '120px',
    borderRadius: '60px',
    background: '#495057',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '-0.5px',
  },
];
