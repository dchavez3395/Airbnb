import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { StarIcon } from '@heroicons/react/solid'


const Map = ({ searchResults }) => {
  const [clickedLocation, setClickedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);


  return (
    <ReactMapGL
      mapStyle="mapbox://styles/denialshaves/clbhj9dd2000015kdaiok5sui"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        width: "100%",
        height: "100",
        latitude: `${center.latitude}`,
        longitude: `${center.longitude}`,
        zoom: 11,
      }}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              onClick={() => setClickedLocation(result)}
              role="img"
              aria-label="push-pin"
              className="text-xl font-medium bg-white hover:bg-gray-700 text-black hover:text-white cursor-pointer rounded-xl px-2 py-.6 transition duration-300 ease-out"
            >
              {result.price}
            </p>
          </Marker>
          {clickedLocation?.long === result?.long ? (
            <Popup
            onClose={() => setClickedLocation({})}
            closeOnClick={false}
            latitude={result?.lat}
            longitude={result?.long}
            anchor="bottom"
            className="text-xl rounded-xl h-[14rem] pb-3"
          >
            <div className="object-cover w-full h-auto">
                <img src={result.img} alt="" className='w-full h-[8.5rem]' />
              </div>
            <div className="flex">
              <div className="py-2">
                <h3 className="text-sm font-medium">{result.title}</h3>
                <p className="font-[550] text-sm">{result.price}</p>
              </div>
              <div className="flex m-auto gap-1 text-[15px]">
                 <StarIcon className="w-4 h-4 text-center justify-center m-auto"/> {result.star}
                </div>
            </div>
          </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
