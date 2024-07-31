import React from 'react';
import { Link } from 'react-router-dom';

const flightDestinations = [
  "Muscle Shoals Airport",
  "Dothan Regional Airport",
  "Anchorage Airport",
  "Bethel Airport",
  "Fairbanks Airport",
  "Juneau Airport",
  "Ketchikan Airport",
  "Kodiak Airport",
  "Wiley Post Airport",
  "Phoenix Sky Harbor Airport",
  "Phoenix Deer Valley",
  "Falcon Field Airport",
  "Prescott Municipal Airport",
  "Chandler Municipal Airport",
  "Phoenix-Mesa Gateway Airport",
  "Scottsdale Airport",
  "Tucson Airport",
  "Siloam Springs Airport",
  "Rogers Airport",
  "Harrison Airport",
  "Birmingham-Shuttlesworth International Airport",
  "Montgomery Regional Airport",
  "MidAmerica St. Louis",
  "Central Illinois Regional Airport",
  "Willard Airport",
  "Chicago Midway International Airport",
  "Quad City International Airport",
  "Peoria International Airport",
  "Fayetteville Airport",
  "Mountain Home Airport",
  "Huntsville International Airport",
  "Tuscaloosa Municipal Airport",
  "Igor Sikorsky Memorial",
  "Danbury Municipal Airport",
  "John F. Kennedy Airport",
  "Groton New London Airport",
  "Danielson Airport",
  "LaGuardia Airport",
  "HUEY Airport",
  "FULL THROTTLE FARM Airport",
  "DOVER AFB Airport",
  "DELDOT HELISTOP Airport",
  "DELAWARE AIRPARK Airport",
  "CHORMAN Airport",
  "Daytona Beach Airport",
  "Fort Lauderdale Airport",
  "Fort Myers Airport",
  "Fort Walton Beach Airport",
  "Gainesville Airport",
  "Jacksonville Airport",
  "Melbourne Airport",
  "Miami Airport",
  "Orlando Airport",
  "Sanford Airport",
  "Sarasota Airport",
  "Tampa Airport",
  "Paragould Airport",
  "Blytheville Airport",
  "Little Rock Airport",
  "Stuttgart Airport",
  "Helena Airport",
  "Pine Bluff Airport",
  "Camden Airport",
  "Magnolia Airport",
  "Lakeland Airport",
  "Batumi International Airport",
  "Redding Municipal",
  "Oakland Airport",
  "Stockton Metropolitan",
  "Aspen Pitkin County",
  "City of Colorado Springs Municipal",
  "Denver",
  "Durango La Plata County",
  "Eagle County Regional Airport",
  "Kutaisi International Airport",
  "Tbilisi International Airport",
  "Sokhumi Airport",
  "Honolulu International Airport",
  "Maui Kahului Airport",
  "Kona International Airport",
  "El Dorado Airport",
  "Crossett Airport",
  "Los Angeles Airport",
  "San Francisco Airport",
  "San Diego Airport",
  "Crescent City Del Norte",
  "California Redwood Coast Humboldt County",
  "Kauai Island Lihue Airport",
  "Hilo International Airport",
  "Hoolehua Airport",
  "Lanai Airport",
  "Boise Airport",
  "Idaho Falls Regional Airport",
  "Hailey Airport",
  "Twin Falls Airport",
  "Poca"
];

const Destinations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center mt-10 uppercase">Top Flight Destinations</h1>
      <div className="max-h-96 overflow-auto">
        <div className="flex flex-col space-y-2">
          {flightDestinations.map((destination, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-4"
            >
              <Link to={'/'} className="text-lg underline">{`Flights from ${destination}`}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
